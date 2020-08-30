import React from 'react';
import Header from './components/Header';
import ColumnWrapper from './components/ColumnWrapper';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App: React.FC = () => {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <ColumnWrapper />
            </main>
            <footer>
                <Footer />
            </footer>
            <Modal mode="add-item" />
        </div>
    );
};

export default App;
