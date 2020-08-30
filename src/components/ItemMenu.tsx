import React, { useState, MouseEvent } from 'react';
import MoveItem from './MoveItem';
import { ItemMenuProps, ItemReducer } from '../utils/types';
import { deleteItem } from '../redux/items';
import { connect } from 'react-redux';
import { modalOpen } from '../redux/modal';
import DeleteModal from './DeleteModal';
import { ReactComponent as KunaiSVG } from '../assets/icons/svg/020-kunai.svg';
import Katana from '../assets/icons/svg/002-katana';

const ItemMenu: React.FC<ItemMenuProps> = ({
    item,
    items,
    setShowMenu,
    deleteItem,
    modalOpen,
}) => {
    const [showMoveItem, setShowMoveItem] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [hovered, setHovered] = useState(false);

    const handleEdit = (evt: MouseEvent) => {
        evt.stopPropagation();
        modalOpen({ ...item, mode: 'update-item' });
    };

    const handleMove = (evt: MouseEvent) => {
        evt.stopPropagation();
        setShowMoveItem(() => !showMoveItem);
    };
    const handleDelete = (evt: MouseEvent) => {
        evt.stopPropagation();
        setShowDeleteModal(true);
    };

    const handleSubModal = () => {
        setShowDeleteModal(false);
    };

    return (
        <div onClick={() => setShowMenu(false)} className="item-menu">
            {!showDeleteModal && (
                <ul className="item-menu__ul">
                    <span
                        className="item-menu__close"
                        onClick={() => setShowMenu(false)}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <Katana
                            hovered={hovered}
                            className="item-menu__katana"
                        />
                    </span>
                    <li
                        className="item-menu__li item-menu__svg--animated"
                        onClick={handleEdit}
                    >
                        Edit
                        <KunaiSVG className="item-menu__svg" />
                    </li>
                    <li
                        className="item-menu__li item-menu__svg--animated"
                        onClick={handleMove}
                    >
                        Move
                        <KunaiSVG className="item-menu__svg" />
                    </li>
                    <li
                        className="item-menu__li item-menu__svg--animated"
                        onClick={handleDelete}
                    >
                        Delete
                        <KunaiSVG className="item-menu__svg" />
                    </li>
                </ul>
            )}
            {showMoveItem && (
                <MoveItem
                    item={item}
                    setShowMoveItem={setShowMoveItem}
                    setShowMenu={setShowMenu}
                />
            )}
            {showDeleteModal && (
                <DeleteModal type="item" item={item} onClose={handleSubModal} />
            )}
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    items: state.items,
    modal: state.modal,
});

const mapDispatchToProps = (dispatch: any) => ({
    deleteItem: (idx: ItemReducer) => dispatch(deleteItem(idx)),
    modalOpen: (data: ItemReducer) => dispatch(modalOpen(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemMenu);
