import React, { useState, MouseEvent } from "react";
import MoveItem from './MoveItem';
import { ItemMenuProps, ItemReducer } from "../utils/types";
import { deleteItem } from '../redux/items';
import { connect } from "react-redux";

const ItemMenu: React.FC<ItemMenuProps> = ({item, items, setShowMenu, deleteItem}) => {
    const [showMoveItem, setShowMoveItem] = useState(false);

    const handleEdit = (evt: MouseEvent) => {
        evt.stopPropagation();
        console.log("edit");
    };
    
    const handleMove = (evt: MouseEvent) => {
        evt.stopPropagation();
        console.log("move");
        setShowMoveItem(() => !showMoveItem);
    };
    const handleDelete = (evt: MouseEvent) => {
        evt.stopPropagation();
        console.log("delete");
        const idx = items.findIndex((each) => each.itemTitle === item.itemTitle);
        deleteItem({ idx });
        setShowMenu(false);
    };
    
    return (
        <div onClick={() => setShowMenu(false)} className='item-menu'>
            <ul className='item-menu__ul' >
            <span className='item-menu__close' onClick={() => setShowMenu(false)}>X</span>
                <li className='item-menu__li' onClick={handleEdit}>Edit</li>
                <li className='item-menu__li' onClick={handleMove}>Move</li>
                <li className='item-menu__li' onClick={handleDelete}>Delete</li>
            </ul>
            {showMoveItem && <MoveItem item={item} setShowMoveItem={setShowMoveItem} setShowMenu={setShowMenu}/>}
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    items: state.items
})

const mapDispatchToProps = (dispatch: any) => ({
    deleteItem: (idx: ItemReducer) => dispatch(deleteItem(idx))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemMenu);
