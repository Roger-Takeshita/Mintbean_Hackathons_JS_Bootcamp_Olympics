import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const App: React.FC<any> = ({ boardItems }) => {
    const [board, setBoard] = useState();

    useEffect(() => {
        setBoard(boardItems);
        console.log(board);
    }, [board, boardItems]);

    return (
        <div className="App">
            <h1>App</h1>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    boardItems: state.boardItems,
});

export default connect(mapStateToProps)(App);
