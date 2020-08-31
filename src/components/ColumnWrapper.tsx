import React from 'react';
import { useDrop } from 'react-dnd';
import { connect } from 'react-redux';
import {
    COLUMN_TYPE,
    ColumnWrapperProps,
    Column,
    MoveItProps,
} from '../utils/types';
import { updateColumn } from '../redux/columns';
import ColumnComponent from './ColumnComponent';

const ColumnWrapper: React.FC<ColumnWrapperProps> = ({
    columns,
    updateColumn,
}) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: COLUMN_TYPE,
    });

    const moveColumn = (dragIndex: number, hoverIndex: number) => {
        updateColumn({ dragIndex, hoverIndex });
    };

    return (
        <div ref={drop} className="col-wrapper">
            {columns.map((col: Column, idx: number) => (
                <ColumnComponent
                    key={idx}
                    column={col}
                    index={idx}
                    moveIt={moveColumn}
                    isOver={isOver}
                />
            ))}
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    columns: state.columns,
});

const mapDispatchToProps = (dispatch: any) => ({
    updateColumn: (data: MoveItProps) => dispatch(updateColumn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnWrapper);
