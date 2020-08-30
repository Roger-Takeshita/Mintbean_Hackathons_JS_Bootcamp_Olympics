import React, { useState, MouseEvent, useEffect } from 'react';
import MoveItem from './MoveItem';
import { ItemMenuProps, ItemReducer } from '../utils/types';
import { deleteItem } from '../redux/items';
import { connect } from 'react-redux';
import { modalOpen } from '../redux/modal';
import DeleteModal from './DeleteModal';

const ItemMenu: React.FC<ItemMenuProps> = ({
    item,
    items,
    setShowMenu,
    deleteItem,
    modalOpen,
}) => {
    const [showMoveItem, setShowMoveItem] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleEdit = (evt: MouseEvent) => {
        evt.stopPropagation();
        modalOpen({ ...item, mode: 'update-item' });
    };

    const handleMove = (evt: MouseEvent) => {
        evt.stopPropagation();
        console.log('move');
        setShowMoveItem(() => !showMoveItem);
    };
    const handleDelete = (evt: MouseEvent) => {
        evt.stopPropagation();
        // console.log("delete");
        // const idx = items.findIndex((each) => each.itemTitle === item.itemTitle);
        // deleteItem({ idx });
        setShowDeleteModal(true);
        // setTimeout(() => setShowMenu(false), 1000);
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
                    >
                        X
                    </span>
                    <li className="item-menu__li" onClick={handleEdit}>
                        Edit
                    </li>
                    <li className="item-menu__li" onClick={handleMove}>
                        Move
                    </li>
                    <li className="item-menu__li" onClick={handleDelete}>
                        Delete
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
                <DeleteModal
                    // showDeleteModal={showDeleteModal}
                    // setShowDeleteModal={setShowDeleteModal}
                    type="item"
                    item={item}
                    onClose={handleSubModal}
                />
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
