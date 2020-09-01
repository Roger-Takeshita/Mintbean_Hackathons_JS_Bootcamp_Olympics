import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Board from './components/Board';
import LandingPage from './components/LandingPage';
import { connect } from 'react-redux';
import { AppProps, ItemReducer } from './utils/types';
import { setItems } from './redux/items';
import { setColumns } from './redux/columns';

const App: React.FC<AppProps> = ({ items, columns, setItems, setColumns }) => {
    const [showBoard, setShowBoard] = useState(false);

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
    }, [setItems, setColumns]);

    useEffect(() => {
        if (columns?.length! > 0) {
            localStorage.setItem('ninja', JSON.stringify({ items, columns }));
        }
    }, [items, columns]);

    return (
        <div className="app">
            <div
                className={
                    showBoard
                        ? 'app__background-2 app__background-2--visible'
                        : 'app__background-2 app__background-2--hidden'
                }
            >
                &nbsp;
            </div>
            <header>
                <Header setShowBoard={setShowBoard} showBoard={showBoard} />
            </header>
            <main>
                {showBoard ? (
                    <Board />
                ) : (
                    <LandingPage
                        setShowBoard={setShowBoard}
                        showBoard={showBoard}
                    />
                )}
            </main>
            <Footer />
            <Modal />
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    items: state.items,
    columns: state.columns,
});

const mapDispatchToProps = (dispatch: any) => ({
    setItems: (data: ItemReducer) => dispatch(setItems(data)),
    setColumns: (data: ItemReducer) => dispatch(setColumns(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
