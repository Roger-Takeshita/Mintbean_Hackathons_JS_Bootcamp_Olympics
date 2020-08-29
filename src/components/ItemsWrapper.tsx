import React from 'react';
import { useDrop } from "react-dnd";
import { ITEM_TYPE, ItemsWrapperProps } from '../utils/types';

const ItemsWrapper: React.FC<ItemsWrapperProps> = ({onDropItem, children, columnId}) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ITEM_TYPE,
        drop: (item, monitor) => {
            onDropItem(item, monitor, columnId);
        },
      //! Usar pra mudar CSS
      // collect: (monitor) => ({
      //     isOver: monitor.isOver(),
      //     canDrop: monitor.canDrop()
      // })
    });

    // const isActive = isOver && canDrop;

    return (
        <div ref={drop} className="item-wrapper">
            {React.cloneElement(children as React.ReactElement<any>, { isOver })}
        </div>
    );
};

export default ItemsWrapper;
