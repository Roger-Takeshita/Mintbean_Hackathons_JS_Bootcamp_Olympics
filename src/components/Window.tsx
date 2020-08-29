import React from 'react';
import Modal from 'react-modal';
import { WindowProps } from '../utils/types';

Modal.setAppElement('#root');

const Window: React.FC<WindowProps> = ({ show, onClose, item }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className="modal"
            overlayClassName="overlay"
        >
            <div className="close__btn-ctn">
                <h1 style={{ flex: '1 90%' }}>{item.itemTitle}</h1>
                <button className="btn__close" onClick={onClose}>
                    X
                </button>
            </div>
            <div className="">
                <h2>Description</h2>
                <p>{item.itemDescription}</p>
            </div>
        </Modal>
    );
};

export default Window;
