import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import dojo from './assets/icons/svg/018-dojo.svg';

import Board from './components/Board';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
    const [showBoard, setShowBoard] = useState(false);

    return (
        <div className='page'>
            <img className="background__dojo" src={dojo} alt="background-2" />
            <div className="app">
                <header>
                    <Header setShowBoard={setShowBoard} showBoard={showBoard}/>
                </header>
                <main>
                    {showBoard ? <Board/> : <LandingPage setShowBoard={setShowBoard} showBoard={showBoard}/>}
                </main>
                <footer>
                    <Footer />
                </footer>
                <Modal />
            </div>
        </div>
    );
};

export default App;
