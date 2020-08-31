import React, { MouseEvent } from 'react';
import Header from './components/Header';
import ColumnWrapper from './components/ColumnWrapper';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { connect } from 'react-redux';
import { AppProps, ItemReducer } from './utils/types';
import { modalOpen } from './redux/modal';
import bamboo from './assets/images/bamboo-2.jpg';
import dojo from './assets/icons/svg/018-dojo.svg';
import { ReactComponent as Sticks } from "./assets/icons/svg/004-sticks.svg";

const App: React.FC<AppProps> = ({ modalOpen }) => {
    const handleAddColumn = (evt: MouseEvent) => {
        modalOpen({ mode: 'add-column' });
    };

    return (
        <>
            <img className='background__bamboo' src={bamboo} alt='background' />
            <img className='background__dojo' src={dojo} alt='background-2' />
            <div className="app">
                <header>
                    <Header />
                </header>
                <main>
                    <ColumnWrapper />
                    <div className="app__add">
                        <h2 className='app__add-title'>Add Column</h2>
                        <button className='btn btn--add app__add-btn' onClick={handleAddColumn}>
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

const mapDispatchToProps = (dispatch: any) => ({
    modalOpen: (data: ItemReducer) => dispatch(modalOpen(data)),
});

export default connect(null, mapDispatchToProps)(App);
