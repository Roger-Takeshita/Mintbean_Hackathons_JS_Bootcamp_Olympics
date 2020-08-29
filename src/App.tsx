import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import ColumnWrapper from './components/ColumnWrapper';
import { Item, Column } from './utils/types';
import { DropTargetMonitor } from 'react-dnd';
import ItemsWrapper from './components/ItemsWrapper';
import ItemComponent from './components/ItemComponent';
import Footer from './components/Footer';

const App: React.FC<any> = ({ columns, items }) => {
    const [boardColumns, setBoardColumns] = useState<Column[]>([]);
    const [boardItems, setBoardItems] = useState<Item[]>([]);

    useEffect(() => {
        setBoardColumns(columns);
        setBoardItems(items);
    }, [columns, items]);

    // const onDropColumn = (column: Item, monitor: DropTargetMonitor, newColumnId: number) => {
    //     setBoardColumns(prevState => {
    //         const newColumns = prevState
    //             .filter(each => each.itemTitle !== item.itemTitle)
    //             .concat({ ...item, columnId: newColumnId });
    //         return [...newColumns];
    //     });
    // };

    // const onDropItem = (
    //     item: Item,
    //     monitor: DropTargetMonitor,
    //     newColumnId: number
    // ) => {
    //     setBoardItems((prevState) => {
    //         const newItems = prevState
    //             .filter((each) => each.itemTitle !== item.itemTitle)
    //             .concat({ ...item, columnId: newColumnId });
    //         return [...newItems];
    //     });
    // };

    // const onDropColumn = (
    //     column: Column,
    //     monitor: DropTargetMonitor
    // ) => {
    //     setBoardItems((prevState) => {
    //         const newItems = prevState
    //             .filter((each) => each.itemTitle !== item.itemTitle)
    //             .concat({ ...item, columnId: newColumnId });
    //         return [...newItems];
    //     });
    // };

    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                {/* <ColumnWrapper onDrop={onDrop}>
                    {board.board.map()}
                </ColumnWrapper> */}
                <div>
                    {/* <ItemsWrapper columnId={0} onDropItem={onDropItem} /> */}
                    <ColumnWrapper />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    items: state.items,
    columns: state.columns,
});

export default connect(mapStateToProps)(App);
