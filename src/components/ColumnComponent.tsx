import React, { useRef } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { COLUMN_TYPE, ColumnProps, ColumnItem, MoveItProps, Column, Item, ItemReducer } from '../utils/types';
import { connect } from "react-redux";
import { updateItemColumn } from "../redux/items";
import ItemsWrapper from "./ItemsWrapper";

const ColumnComponent: React.FC<ColumnProps> = ({ isOver, column, index, moveIt, columns, updateItemColumn}) => {
    const ref = useRef<HTMLDivElement>(null);
    const hovering = isOver ? 'is-over' : '';

    const [, drop] = useDrop({
        accept: COLUMN_TYPE,
        hover(column: ColumnItem, monitor: DropTargetMonitor) {
            if (!ref.current) return;

            const dragIndex = column.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) return;

            const hoveredRect = ref.current?.getBoundingClientRect();
            const hoverMiddleX = (hoveredRect.left - hoveredRect.right) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientX = mousePosition!.x - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) return;
            if (dragIndex > hoverIndex && hoverClientX < hoverMiddleX) return;

            moveIt(dragIndex, hoverIndex);
            column.index = hoverIndex;
        },
    });

    const [{ opacity }, drag] = useDrag({
        item: { type: COLUMN_TYPE, ...column, index },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0 : 1
        })
    })

    const onDropItem = (
        item: any,
        monitor: DropTargetMonitor,
        newColumnId: number
    ) => {
        updateItemColumn(item, newColumnId);
    };
    
    drag(drop(ref));

    return (
        <div
            ref={ref}
            className={`col ${opacity} ${hovering}`}
        >
            {/* <div className="col__col-box">
                {columns.map((col, idx) => {
                    return ( */}
                        <div className="col__col-individual" style={{border: `1px solid black`}}>
                            <ItemsWrapper columnId={column.columnId} onDropItem={onDropItem} />
                        </div>
                    {/* )
                })} */}
            {/* </div> */}
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    columns: state.columns
})

const mapDispatchToProps = (dispatch: any) => ({
    updateItemColumn: (data: ItemReducer) => dispatch(updateItemColumn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnComponent);
