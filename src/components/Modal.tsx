import React, { useState, ChangeEvent, useEffect } from 'react';
import { ItemReducer, ModalProps } from '../utils/types';
import { connect } from 'react-redux';
import { modalClose } from '../redux/modal';
import { updateItem } from '../redux/items';

const Modal: React.FC<ModalProps> = ({ modal, modalClose, updateIme }) => {
    const initialState = {
        itemTitle: '',
        itemDescription: '',
        columnId: -1,
        index: -1,
    };
    const [open, setOpen] = useState(true);
    const [form, setForm] = useState(initialState);

    useEffect(() => {
        setForm(modal);
    }, [modal]);

    const handleChange = ({
        target: { name, value },
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [name]: value,
        });
        console.log(form);
    };

    const handleClose = () => {
        setOpen(false);
        setForm(initialState);
        modalClose();
    };

    const handleUpdated = () => {
        // TODO Add new item to items redux
        updateIme(form);
        //+ Then we clean the modal
        handleClose();
    };

    return (
        <div className={open ? 'modal modal--visible' : 'modal modal--hide'}>
            <div className="modal__modal-box">
                <div className="modal__header">
                    <input
                        type="text"
                        id="title"
                        className="modal__input"
                        placeholder="Title"
                        value={form.itemTitle}
                        onChange={handleChange}
                        name="itemTitle"
                        required
                    />
                    <label htmlFor="title" className="modal__label">
                        Title
                    </label>
                </div>
                <div className="modal__body">
                    <textarea
                        className="modal__input modal__input--description"
                        placeholder="Description"
                        autoComplete="off"
                        id="description"
                        name="itemDescription"
                        data-gramm="false"
                        onChange={handleChange}
                        spellCheck="false"
                        value={form.itemDescription}
                    />
                    <label htmlFor="description" className="modal__label">
                        Description
                    </label>
                </div>
                <div className="modal__ctrl">
                    <button className="btn btn--ok" onClick={handleUpdated}>
                        Update
                    </button>
                    <button className="btn btn--cancel" onClick={handleClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    modal: state.modal,
});

const mapDispatchToProps = (dispatch: any) => ({
    updateItem: (data: ItemReducer) => dispatch(updateItem(data)),
    modalClose: () => dispatch(modalClose()),
    updateIme: (data: ItemReducer) => dispatch(updateItem(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
