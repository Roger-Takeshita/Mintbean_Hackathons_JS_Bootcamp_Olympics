import React, { MouseEvent } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { DeleteModalProps, ItemReducer } from '../utils/types';
import { deleteColumn } from '../redux/columns';
import { deleteItem, deleteItems } from '../redux/items';

ReactModal.setAppElement('#root');

const DeleteModal: React.FC<DeleteModalProps> = ({
    showDeleteModal,
    setShowDeleteModal,
    type,
    item,
    column,
    deleteItem,
    deleteItems,
    deleteColumn,
}) => {
    const handleDelete = (evt: MouseEvent) => {
        if (type === 'item') {
            deleteItem!({ itemId: item!.itemId });
        } else {
            deleteColumn!({ columnId: column!.columnId });
            deleteItems!({ columnId: column!.columnId });
        }
        setShowDeleteModal(false);
    };

    return (
        <ReactModal
            isOpen={showDeleteModal}
            onRequestClose={() => setShowDeleteModal(false)}
            overlayClassName="ReactModal__Overlay"
            className="delete-modal"
            shouldCloseOnEsc={true}
        >
            <h2 className="delete-modal__title">{`Are you sure you want to delete the ${type}: ${
                type === 'item' ? item!.itemTitle : column!.columnTitle
            }?`}</h2>
            <button
                className="btn btn__delete-modal-delete"
                onClick={handleDelete}
            >
                Yes
            </button>
            <button
                className="btn btn__delete-modal-cancel"
                onClick={() => setShowDeleteModal(false)}
            >
                Cancel
            </button>
        </ReactModal>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    deleteItem: (itemId: ItemReducer) => dispatch(deleteItem(itemId)),
    deleteItems: (columnId: ItemReducer) => dispatch(deleteItems(columnId)),
    deleteColumn: (columnId: ItemReducer) => dispatch(deleteColumn(columnId)),
});

export default connect(null, mapDispatchToProps)(DeleteModal);
