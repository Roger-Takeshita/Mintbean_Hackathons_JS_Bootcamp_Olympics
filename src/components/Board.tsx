import React, { MouseEvent } from 'react'
import { modalOpen } from '../redux/modal';
import { connect } from 'react-redux';
import { BoardProps, ItemReducer } from '../utils/types';
import ColumnWrapper from './ColumnWrapper';
import { ReactComponent as Sticks } from '../assets/icons/svg/004-sticks.svg';

const Board: React.FC<BoardProps> = ({ modalOpen }) => {
    const handleAddColumn = (evt: MouseEvent) => {
        evt.preventDefault();
        modalOpen({ mode: 'add-column' });
    };

    return (
        <>
            <ColumnWrapper />
            <div className="board__add" onContextMenu={handleAddColumn}>
                <h2 className="board__add-title">Add Column</h2>
                <button
                    className="btn btn--add board__add-btn"
                    onClick={handleAddColumn}
                >
                    <Sticks className="board__add-sticks-plus" />
                </button>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    modalOpen: (data: ItemReducer) => dispatch(modalOpen(data)),
});

export default connect(null, mapDispatchToProps)(Board);
