import React, { useRef } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { COLUMN_TYPE, ColumnProps, ColumnItem } from '../utils/types';


const Column: React.FC<ColumnProps> = ({ isOver, column, index, moveIt, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const hovering = isOver ? 'is-over' : '';

    const [, drop] = useDrop({
        accept: COLUMN_TYPE,
        hover(item: ColumnItem, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoveredRect = ref.current?.getBoundingClientRect();
            const hoverMiddleX = (hoveredRect.left - hoveredRect.right) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientX = mousePosition!.x - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) return;
            if (dragIndex > hoverIndex && hoverClientX < hoverMiddleX) return;

            moveIt(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });


    const [{ opacity }, drag] = useDrag({
        item: { type: COLUMN_TYPE, ...column, index },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0 : 1
        })
    })

    return (
        <div
            ref={ref}
            className={`col ${opacity} ${hovering}`}
        >
            {children}
        </div>
    );
};

export default Column;
