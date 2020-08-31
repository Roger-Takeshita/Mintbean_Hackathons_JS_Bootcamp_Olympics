import React, { KeyboardEvent, useRef, useEffect } from 'react';
import { WindowProps } from '../utils/types';

const Window: React.FC<WindowProps> = ({ onClose, item }) => {
    const modalRef = useRef<HTMLInputElement>(null);

    const handleKeyPress = (evt: KeyboardEvent) => {
        evt.preventDefault();
        if (evt.keyCode === 27) onClose();
    };

    useEffect(() => {
        modalRef.current!.focus();
    }, []);

    return (
        <div
            ref={modalRef}
            onClick={onClose}
            className="window-modal"
            onKeyDown={handleKeyPress}
            tabIndex={0}
        >
            <div
                className="window-modal__section"
                onClick={(evt) => evt.stopPropagation()}
            >
                <div className="window-modal__title-section">
                    <h1 className="window-modal__title">{item.itemTitle}</h1>
                    <button className="btn window-modal__btn" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="window-modal__description-section">
                    <p className="window-modal__description-text">
                        {item.itemDescription}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Window;
