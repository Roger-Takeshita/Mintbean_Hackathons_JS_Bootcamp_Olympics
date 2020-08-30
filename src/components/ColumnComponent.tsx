import React, { useRef } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import {
    COLUMN_TYPE,
    ColumnProps,
    ColumnItem,
    MoveItProps,
    Column,
    Item,
    ItemReducer,
} from '../utils/types';
import { connect } from 'react-redux';
import { updateItemColumn } from '../redux/items';
import ItemsWrapper from './ItemsWrapper';
import { modalOpen } from '../redux/modal';

const ColumnComponent: React.FC<ColumnProps> = ({
    isOver,
    column,
    index,
    moveIt,
    columns,
    updateItemColumn,
    modalOpen,
}) => {
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
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0 : 1,
        }),
    });

    const onDropItem = (
        item: any,
        monitor: DropTargetMonitor,
        newColumnId: string
    ) => {
        if (item.columnId !== newColumnId) {
            updateItemColumn({ item, newColumnId });
        }
    };

    drag(drop(ref));

    const handleButtonAddItem = () => {
        modalOpen({ mode: 'add-item', columnId: column.columnId });
    };

    const handleButtonEditColumn = () => {
        modalOpen({
            mode: 'update-column',
            columnTitle: column.columnTitle,
            columnId: column.columnId,
        });
    };

    return (
        <div ref={ref} className={`col ${opacity} ${hovering}`}>
            <div className="col__col-individual">
                <section>
                    <div className="col__title">{column.columnTitle}</div>
                    <button onClick={handleButtonEditColumn}>Edit</button>
                </section>
                <ItemsWrapper
                    columnId={column.columnId}
                    onDropItem={onDropItem}
                />
                <button className="btn btn--add" onClick={handleButtonAddItem}>
                    +
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    columns: state.columns,
});

const mapDispatchToProps = (dispatch: any) => ({
    updateItemColumn: (data: ItemReducer) => dispatch(updateItemColumn(data)),
    modalOpen: (data: ItemReducer) => dispatch(modalOpen(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnComponent);
