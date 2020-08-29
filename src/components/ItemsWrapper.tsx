import React from 'react';
import { useDrop } from 'react-dnd';
import { ITEM_TYPE, ItemsWrapperProps } from '../utils/types';
import ItemComponent from './ItemComponent';
import { connect } from 'react-redux';
import { updateItem } from '../redux/items';
import { MoveItProps } from '../utils/types';

const ItemsWrapper: React.FC<ItemsWrapperProps> = ({
    onDropItem,
    columnId,
    items,
    updateItem,
}) => {
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

    const moveItem = (dragIndex: number, hoverIndex: number, item: any) => {
        updateItem({ dragIndex, hoverIndex, item });
    };

    // const isActive = isOver && canDrop;

    // const thisColumnItems =

    return (
        <div ref={drop} className="item-wrapper">
            {items
                // .filter((item) => item.columnId === columnId)
                .map((item, idx) => {
                    if (item.columnId === columnId) {
                        return (
                            <ItemComponent
                                key={idx}
                                item={item}
                                index={idx}
                                moveIt={moveItem}
                                columnId={columnId}
                            />
                        );
                    }
                })}
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    items: state.items,
});

const mapDispatchToProps = (dispatch: any) => ({
    updateItem: (data: MoveItProps) => dispatch(updateItem(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsWrapper);
