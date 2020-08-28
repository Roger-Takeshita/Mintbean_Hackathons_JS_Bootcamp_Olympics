import React from 'react';
import './ColumnWrapper.css';
import { useDrop } from "react-dnd";
import { COLUMN_TYPE } from '../../types';

interface ColumnWrapperProps extends React.Component {
    onDrop: (item: any) => void
};

const ColumnWrapper: React.FC<ColumnWrapperProps> = ({onDrop}) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: COLUMN_TYPE,
        drop: onDrop,
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
