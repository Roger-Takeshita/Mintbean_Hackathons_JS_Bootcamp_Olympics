import React, { MouseEvent, useState } from 'react';
import { ColumnEditMenuProps, ItemReducer } from '../utils/types';
import { connect } from 'react-redux';
import { modalOpen } from '../redux/modal';
import DeleteModal from './DeleteModal';

const ColumnEditMenu: React.FC<ColumnEditMenuProps> = ({
    column,
    modalOpen,
    setShowEditMenu,
}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleClose = (evt: MouseEvent) => setShowEditMenu(false);

    const handleEdit = (evt: MouseEvent) => {
        evt.stopPropagation();
        modalOpen({
            mode: 'update-column',
            columnTitle: column.columnTitle,
            columnId: column.columnId,
        });
        setShowEditMenu(false);
    };

    const handleDelete = (evt: MouseEvent) => {
        evt.stopPropagation();
        setShowDeleteModal(true);
    };

    return (
        <div
            className="col-edit-menu"
            onClick={handleClose}
            style={{ zIndex: 10, position: 'absolute', right: '-5rem' }}
        >
            <span onClick={handleClose}>X</span>
            <ul className="col-edit-menu__ul">
                <li className="col-edit-menu__li" onClick={handleEdit}>
                    Edit Column
                </li>
                <li className="col-edit-menu__li" onClick={handleDelete}>
                    Delete Column
                </li>
            </ul>
            <DeleteModal
                showDeleteModal={showDeleteModal}
                setShowDeleteModal={setShowDeleteModal}
                type="column"
                column={column}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    modalOpen: (data: ItemReducer) => dispatch(modalOpen(data)),
});

export default connect(null, mapDispatchToProps)(ColumnEditMenu);
