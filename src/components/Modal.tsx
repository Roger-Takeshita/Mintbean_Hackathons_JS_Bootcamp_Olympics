import React, { useState, ChangeEvent, useEffect } from 'react';
import { ItemReducer, ModalProps } from '../utils/types';
import { connect } from 'react-redux';
import { modalClose } from '../redux/modal';
import { addItem, updateItemInfo } from '../redux/items';
import { addColumn, updateColumnInfo } from '../redux/columns';

const Modal: React.FC<ModalProps> = ({
    modal,
    modalClose,
    addItem,
    updateItemInfo,
    addColumn,
    updateColumnInfo,
    mode,
}) => {
    const initialState = {
        itemTitle: '',
        itemDescription: '',
        columnId: -1,
        index: -1,
    };
    const [open, setOpen] = useState(true);
    const [form, setForm] = useState(initialState);
    const [modeNow, setModeNow] = useState('');

    useEffect(() => {
        setForm(modal);
        setOpen(true);

        if (mode === 'add-column') {
            setModeNow('add-column');
        } else if (mode === 'add-item') {
            setModeNow('add-item');
            // TODO Change the column ID later
            setForm({ ...form, columnId: 0 });
        } else if (mode === 'update-item') {
            setModeNow('update-item');
        } else {
            setModeNow('update-column');
        }
    }, [modal, mode]);

    const handleChange = ({
        target: { name, value },
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleClose = () => {
        setOpen(false);
        setForm(initialState);
        modalClose();
    };

    const handleUpdated = () => {
        // TODO Add new item to items redux
        if (mode === 'add-column') {
            addColumn!(form.itemTitle);
        } else if (mode === 'add-item') {
            addItem!(form);
        } else if (mode === 'update-item') {
            updateItemInfo!(form);
        } else {
            // updateColumnInfo!();
        }

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
                {modeNow === 'add-item' ? (
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
                ) : (
                    ''
                )}
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
    addItem: (data: ItemReducer) => dispatch(addItem(data)),
    updateItemInfo: (data: ItemReducer) => dispatch(updateItemInfo(data)),
    addColumn: (data: string) => dispatch(addColumn(data)),
    updateColumnInfo: (data: string) => dispatch(updateColumnInfo(data)),
    modalClose: () => dispatch(modalClose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
