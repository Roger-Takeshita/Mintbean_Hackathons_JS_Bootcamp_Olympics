import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import ColumnWrapper from './components/ColumnWrapper';
import { Item, Column } from './utils/types';
import { DropTargetMonitor } from 'react-dnd';
import ItemsWrapper from './components/ItemsWrapper';
import ItemComponent from './components/ItemComponent';

const App: React.FC<any> = ({ columns, items }) => {
    const [boardColumns, setBoardColumns] = useState<Column[]>([]);
    const [boardItems, setBoardItems] = useState<Item[]>([]);

    useEffect(() => {
        setBoardColumns(columns);
        setBoardItems(items);
        // console.log(boardColumns);
        // console.log(boardItems);
    }, [columns, items]);

    // const onDropColumn = (column: Item, monitor: DropTargetMonitor, newColumnId: number) => {
    //     setBoardColumns(prevState => {
    //         const newColumns = prevState
    //             .filter(each => each.itemTitle !== item.itemTitle)
    //             .concat({ ...item, columnId: newColumnId });
    //         return [...newColumns];
    //     });
    // };

    const onDropItem = (item: Item, monitor: DropTargetMonitor, newColumnId: number) => {
        setBoardItems(prevState => {
            const newItems = prevState
                .filter(each => each.itemTitle !== item.itemTitle)
                .concat({ ...item, columnId: newColumnId });
            return [...newItems];
        });
    };

    const moveCol = (dragIndex: number, hoverIndex: number) => {
        const col = boardColumns![dragIndex];
        setBoardColumns((prevState) => {
            const newColumns = prevState.filter((item, idx) => idx !== dragIndex);
            newColumns.splice(hoverIndex, 0, col);
            return [...newColumns];
        });
    };

    return (
        <div className="App">
            <Header />
            <main>
                {/* <ColumnWrapper onDrop={onDrop}>
                    {board.board.map()}
                </ColumnWrapper> */}
                <div>
                    <ItemsWrapper columnId={0} onDropItem={onDropItem} />
                </div>
            </main>
            <footer>
                Pezinho
            </footer>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    items: state.items,
    columns: state.columns
});

export default connect(mapStateToProps)(App);
