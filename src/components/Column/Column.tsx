import React from 'react';
import './Column.css';
import { useDrag } from 'react-dnd';
import { COLUMN_TYPE } from "../../types";

interface ColumnProps extends React.Component {
    isOver: boolean
};

const Column: React.FC<ColumnProps> = ({isOver, children}) => {
    const hovering = isOver ? 'is-over' : '';

    const [{ opacity }, drag] = useDrag({
        item: { type: COLUMN_TYPE },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0 : 1
        })
    })

    return (
        <div className={`col ${opacity} ${hovering}`}>
            {children}
        </div>
    );
};

export default Column;
