import React, { useRef, useState } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { ITEM_TYPE, ItemProps, DragItem } from '../utils/types';
import Window from './Window';

const ItemComponent: React.FC<ItemProps> = ({
    item,
    index,
    moveIt,
    columnId,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(false);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item: DragItem, monitor: DropTargetMonitor) {
            if (!ref.current) return;

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) return;

            const hoveredRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition!.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

            moveIt(dragIndex, hoverIndex, item);
            item.index = hoverIndex;
        },
    });

    const [{ opacity }, drag] = useDrag({
        item: { type: ITEM_TYPE, ...item, index },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0 : 1,
        }),
    });

    const onOpen = () => {
        setShow(true);
    };

    const onClose = () => {
        setShow(false);
    };

    drag(drop(ref));

    return (
        <>
            <div ref={ref} className={`item ${opacity}`} onClick={onOpen}>
                <div className="item__item-box">
                    <p className="item__paragraph--title">{item.itemTitle}</p>
                    <p className="item__paragraph--status">
                        {item.itemDescription}
                    </p>
                </div>
            </div>
            <Window item={item} onClose={onClose} show={show} />
        </>
    );
};

export default ItemComponent;
