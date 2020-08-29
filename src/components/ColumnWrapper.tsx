import React from 'react';
import { useDrop } from "react-dnd";
import { COLUMN_TYPE, ColumnWrapperProps } from "../utils/types";

const ColumnWrapper: React.FC<ColumnWrapperProps> = ({onDropColumn}) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: COLUMN_TYPE,
        // drop: onDropColumn(item, monitor, columnId),
        //! Usar pra mudar CSS
        // collect: (monitor) => ({
        //     isOver: monitor.isOver(),
        //     canDrop: monitor.canDrop()
        // })
    })

    // const isActive = isOver && canDrop;


    return (
        <div ref={drop} className='col-wrapper'>
            COLUMN WRAPPER
        </div>
    );
};

export default ColumnWrapper;
