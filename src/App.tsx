import React, { MouseEvent } from 'react';
import Header from './components/Header';
import ColumnWrapper from './components/ColumnWrapper';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { connect } from 'react-redux';
import { AppProps, ItemReducer } from './utils/types';
import { modalOpen } from './redux/modal';

const App: React.FC<AppProps> = ({ modalOpen }) => {
    const handleAddColumn = (evt: MouseEvent) => {
        modalOpen({ mode: 'add-column' });
    };

    return (
        <div className="app">
            <header>
                <Header />
            </header>
            <main>
                <ColumnWrapper />
                <div className="add">
                    <h2>Add Column</h2>
                    <button onClick={handleAddColumn}>+</button>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
            <Modal />
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    modalOpen: (data: ItemReducer) => dispatch(modalOpen(data)),
});

export default connect(null, mapDispatchToProps)(App);
