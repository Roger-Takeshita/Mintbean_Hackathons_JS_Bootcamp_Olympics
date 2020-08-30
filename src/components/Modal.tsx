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
}) => {
    const initialState = {
        itemTitle: '',
        itemDescription: '',
        columnId: '',
        columnTitle: '',
        index: -1,
    };
    const [form, setForm] = useState(initialState);
    const [modeNow, setModeNow] = useState('');

    useEffect(() => {
        setForm(modal);
        setModeNow(modal.mode!);
    }, [modal]);

    const handleChange = ({
        target: { name, value },
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleClose = () => {
        setForm(initialState);
        modalClose();
    };

    const handleUpdated = () => {
        setForm({ ...form, columnId: modal.columnId });
        if (modal.mode === 'add-column') {
            addColumn!(form.itemTitle);
        } else if (modal.mode === 'add-item') {
            addItem!(form);
        } else if (modal.mode === 'update-item') {
            updateItemInfo!(form);
        } else {
            updateColumnInfo!(form);
        }

        handleClose();
    };

    return (
        <div
            className={
                modal.mode !== '' ? 'modal modal--visible' : 'modal modal--hide'
            }
        >
            <div className="modal__modal-box">
                <div className="modal__header">
                    <input
                        type="text"
                        id="title"
                        className="modal__input"
                        placeholder="Title"
                        value={form.itemTitle || form.columnTitle}
                        onChange={handleChange}
                        name={form.itemTitle ? 'itemTitle' : 'columnTitle'}
                        required
                    />
                    <label htmlFor="title" className="modal__label">
                        Title
                    </label>
                </div>
                {modeNow === 'add-item' || modeNow === 'update-item' ? (
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
    updateColumnInfo: (data: ItemReducer) => dispatch(updateColumnInfo(data)),
    modalClose: () => dispatch(modalClose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
