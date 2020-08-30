import React from 'react';
import { connect } from "react-redux";
import { MoveItemsProps, Column, ItemReducer } from '../utils/types';
import { updateItemColumn } from '../redux/items';

const MoveItem: React.FC<MoveItemsProps> = ({item, columns, updateItemColumn, setShowMoveItem, setShowMenu}) => {
    const handleClick = (col: Column) => {
        updateItemColumn({ item, newColumnId: col.columnId })
        setShowMoveItem(false);
        setShowMenu(false);
    }

    const handleCloseMove = (evt: any) => {
        evt.stopPropagation();
        setShowMoveItem(false);
    }

    return (
        <div className='move-item'>
            <span className='move-item__close' onClick={handleCloseMove}>X</span>
            <h1 className='move-item__title'>Move Item</h1>
            <section className='move-item__section'>
                <h2 className='move-item__subtitle'>Where?</h2>
                <ul className='move-item__ul'>
                    {columns!.map((col) => <li key={col.columnId} onClick={() => handleClick(col)} className='move-item__li'>{col.columnTitle}</li>)}
                </ul>
            </section>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    columns: state.columns,
});

const mapDispatchToProps = (dispatch: any) => ({
    updateItemColumn: (data: ItemReducer) => dispatch(updateItemColumn(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MoveItem);
