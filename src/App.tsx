import React, { MouseEvent, useEffect } from 'react';
import Header from './components/Header';
import ColumnWrapper from './components/ColumnWrapper';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { connect } from 'react-redux';
import { AppProps, ItemReducer, Column, Item } from './utils/types';
import { modalOpen } from './redux/modal';
import bamboo from './assets/images/bamboo-2.jpg';
import dojo from './assets/icons/svg/018-dojo.svg';
import { ReactComponent as Sticks } from './assets/icons/svg/004-sticks.svg';
import { setItems } from './redux/items';
import { setColumns } from './redux/columns';

const App: React.FC<AppProps> = ({
    modalOpen,
    items,
    columns,
    setItems,
    setColumns,
}) => {
    const handleAddColumn = (evt: MouseEvent) => {
        evt.preventDefault();
        modalOpen({ mode: 'add-column' });
    };

    useEffect(() => {
        const items = localStorage.getItem('ninja');

        if (items !== null) {
            const data = JSON.parse(items);
            if (data.items && data.items.length > 0)
                setItems({ items: data.items });
            if (data.columns && data.columns.length > 0) {
                setColumns({ columns: data.columns });
            }
        }
    }, []);

    useEffect(() => {
        if (columns?.length! > 0) {
            localStorage.setItem('ninja', JSON.stringify({ items, columns }));
        }
    }, [items, columns]);

    return (
        <>
            <img className="background__bamboo" src={bamboo} alt="background" />
            <img className="background__dojo" src={dojo} alt="background-2" />
            <div className="app">
                <header>
                    <Header />
                </header>
                <main>
                    <ColumnWrapper />
                    <div className="app__add" onContextMenu={handleAddColumn}>
                        <h2 className="app__add-title">Add Column</h2>
                        <button
                            className="btn btn--add app__add-btn"
                            onClick={handleAddColumn}
                        >
                            <Sticks className="app__add-sticks-plus" />
                        </button>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
                <Modal />
            </div>
        </>
    );
};

const mapStateToProps = (state: any) => ({
    items: state.items,
    columns: state.columns,
});

const mapDispatchToProps = (dispatch: any) => ({
    modalOpen: (data: ItemReducer) => dispatch(modalOpen(data)),
    setItems: (data: ItemReducer) => dispatch(setItems(data)),
    setColumns: (data: ItemReducer) => dispatch(setColumns(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
