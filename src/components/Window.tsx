import React from 'react';
import Modal from 'react-modal';
import { WindowProps } from '../utils/types';

Modal.setAppElement("#root");

const Window: React.FC<WindowProps> = ({ show, onClose, item }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className="window-modal"
            overlayClassName="ReactModal__Overlay"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
        >
            <div className='window-modal__section'>
            <div className="window-modal__title-section">
                <h1 className='window-modal__title'>{item.itemTitle}</h1>
                <button className="btn window-modal__btn" onClick={onClose}>
                    X
                </button>
            </div>
            <div className="window-modal__description-section">
                <p className="window-modal__description-text">{item.itemDescription}</p>
                </div>
                </div>
        </Modal>
    );
};

export default Window;
