import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MoveItemsProps, Column, ItemReducer } from '../utils/types';
import { updateItemColumn } from '../redux/items';
import { ReactComponent as KunaiSVG } from '../assets/icons/svg/020-kunai.svg';
import Katana from '../assets/icons/svg/002-katana';

const MoveItem: React.FC<MoveItemsProps> = ({
    item,
    columns,
    updateItemColumn,
    setShowMoveItem,
    setShowMenu,
}) => {
    const [hovered, setHovered] = useState(false);

    const handleClick = (col: Column) => {
        updateItemColumn({ item, newColumnId: col.columnId });
        setShowMoveItem(false);
        setShowMenu(false);
    };

    const handleCloseMove = (evt: any) => {
        evt.stopPropagation();
        setShowMoveItem(false);
    };

    return (
        <div className="move-item__bg" onClick={handleCloseMove}>
            <div className="move-item">
                <span
                    className="move-item__close"
                    onClick={handleCloseMove}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <Katana hovered={hovered} className="move-item__katana" />
                </span>
                <section className="move-item__section">
                    <h1 className="move-item__title">Move Item</h1>
                    <ul className="move-item__ul">
                        {columns!.map((col) => (
                            <li
                                key={col.columnId}
                                onClick={() => handleClick(col)}
                                className="move-item__li move-item__svg--animated"
                            >
                                {col.columnTitle}
                                <KunaiSVG className="move-item__svg" />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    columns: state.columns,
});

const mapDispatchToProps = (dispatch: any) => ({
    updateItemColumn: (data: ItemReducer) => dispatch(updateItemColumn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoveItem);
