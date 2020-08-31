import React, { MouseEvent, useState } from 'react';
import { ColumnEditMenuProps, ItemReducer } from '../utils/types';
import { connect } from 'react-redux';
import { modalOpen } from '../redux/modal';
import DeleteModal from './DeleteModal';
import Katana from "../assets/icons/svg/002-katana";
import { ReactComponent as KunaiSVG } from "../assets/icons/svg/020-kunai.svg";

const ColumnEditMenu: React.FC<ColumnEditMenuProps> = ({
    column,
    modalOpen,
    setShowEditMenu,
}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [hovered, setHovered] = useState(false);

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

    const handleSubModal = () => {
        setShowDeleteModal(false);
    };

    return (
        <div
            className="col-edit-menu"
            onClick={handleClose}
        >
            {!showDeleteModal && (
                <div className='col-edit-menu__section'>
                    <span className='col-edit-menu__close animated--hover'
                        onClick={handleClose} 
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}>
                        <Katana hovered={hovered} className="col-edit-menu__katana" />
                    </span>
                    <h1 className='col-edit-menu__title'>Column</h1>
                    <ul className="col-edit-menu__ul">
                        <li className="col-edit-menu__li col-edit-menu__svg--animated" onClick={handleEdit}>
                            Edit
                            <KunaiSVG className="col-edit-menu__svg" />
                        </li>
                        <li
                            className="col-edit-menu__li col-edit-menu__svg--animated"
                            onClick={handleDelete}
                        >
                            Delete
                            <KunaiSVG className="col-edit-menu__svg" />
                        </li>
                    </ul>
                </div>
            )}
            {showDeleteModal && (
                <DeleteModal
                    // showDeleteModal={showDeleteModal}
                    // setShowDeleteModal={setShowDeleteModal}
                    type="column"
                    column={column}
                    onClose={handleSubModal}
                />
            )}
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    modalOpen: (data: ItemReducer) => dispatch(modalOpen(data)),
});

export default connect(null, mapDispatchToProps)(ColumnEditMenu);
