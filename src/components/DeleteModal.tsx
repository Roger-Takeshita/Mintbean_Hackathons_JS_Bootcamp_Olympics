import React, { MouseEvent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DeleteModalProps, ItemReducer } from '../utils/types';
import { deleteColumn } from '../redux/columns';
import { deleteItem, deleteItems } from '../redux/items';

const DeleteModal: React.FC<DeleteModalProps> = ({
    type,
    item,
    column,
    deleteItem,
    deleteItems,
    deleteColumn,
    onClose,
}) => {
    const handleDelete = (evt: MouseEvent) => {
        if (type === 'item') {
            deleteItem!({ itemId: item!.itemId });
        } else {
            deleteColumn!({ columnId: column!.columnId });
            deleteItems!({ columnId: column!.columnId });
        }
        onClose!();
    };

    return (
        <div className="delete-modal">
            <h2 className="delete-modal__title">
                Are you sure you want to delete the {type}:<br />
                <span className="delete-modal__title--item">
                    {(item && item!.itemTitle) ||
                        (column && column!.columnTitle)}
                </span>
            </h2>
            <div className="delete-modal__ctrl-box">
                <button className="btn btn--ok" onClick={handleDelete}>
                    Yes
                </button>
                <button className="btn btn--cancel" onClick={() => onClose!()}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    deleteItem: (itemId: ItemReducer) => dispatch(deleteItem(itemId)),
    deleteItems: (columnId: ItemReducer) => dispatch(deleteItems(columnId)),
    deleteColumn: (columnId: ItemReducer) => dispatch(deleteColumn(columnId)),
});

export default connect(null, mapDispatchToProps)(DeleteModal);
