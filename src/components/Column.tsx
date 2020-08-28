import React from 'react';

const Column: React.FC = ({ isOver, children }) => {
    const className = isOver ? 'column--highlight' : '';

    return (
        <div className={className}>
            <h1>Column</h1>
            {children}
        </div>
    );
};

export default Column;
