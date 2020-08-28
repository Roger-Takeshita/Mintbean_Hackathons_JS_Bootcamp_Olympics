import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#App');

const Window: React.FC = ({ show, onClose, item }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className="modal"
            overlayClassName="overlay"
        >
            <div className="close__btn-ctn">
                <h1 style={{ flex: '1 90%' }}>{item.title}</h1>
                <button className="btn__close" onClick={onClose}>
                    X
                </button>
            </div>
            <div className="">
                <h2>Description</h2>
                <p>{item.content}</p>
                <h2>Status</h2>
                <p>
                    {item.icon}
                    {`${item.status
                        .chartAt(0)
                        .toUpperCase()}${item.status.slice(1)}`}
                </p>
            </div>
        </Modal>
    );
};

export default Window;
