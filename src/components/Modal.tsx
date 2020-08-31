import React, {
    useState,
    ChangeEvent,
    useEffect,
    MouseEvent,
    FormEvent,
} from 'react';
import { ItemReducer, ModalProps } from '../utils/types';
import { connect } from 'react-redux';
import { modalClose } from '../redux/modal';
import { addItem, updateItemInfo } from '../redux/items';
import { addColumn, updateColumnInfo } from '../redux/columns';
import Katana from '../assets/icons/svg/002-katana';

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
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        setForm(modal);
        setModeNow(modal.mode!);
    }, [modal]);

    const handleChange = (
        evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        evt.stopPropagation();
        setForm({
            ...form,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleClose = (evt: FormEvent | MouseEvent) => {
        setForm(initialState);
        modalClose();
        evt.preventDefault();
    };

    const handleUpdated = (evt: FormEvent | MouseEvent) => {
        evt.preventDefault();
        setForm({ ...form, columnId: modal.columnId });
        if (modal.mode === 'add-column') {
            addColumn!(form.columnTitle);
        } else if (modal.mode === 'add-item') {
            addItem!(form);
        } else if (modal.mode === 'update-item') {
            updateItemInfo!(form);
        } else {
            updateColumnInfo!(form);
        }

        handleClose(evt);
    };

    const isFormValid = () => {
        return !(form.itemTitle !== '' || form.columnTitle !== '');
    };

    return (
        <div
            className={
                modal.mode !== '' ? 'modal modal--visible' : 'modal modal--hide'
            }
            onClick={handleClose}
        >
            <div
                className="modal__modal-box"
                onClick={(evt) => evt.stopPropagation()}
            >
                <form onSubmit={handleUpdated}>
                    <div className="modal__header">
                        <h1 className="modal__title">
                            Add New {modeNow.split('-')[1]}
                        </h1>
                        <span
                            className="modal__close"
                            onClick={handleClose}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <Katana
                                hovered={hovered}
                                className="modal__katana"
                            />
                        </span>
                        <input
                            type="text"
                            id="title"
                            className="modal__input"
                            placeholder="Title"
                            value={form.itemTitle || form.columnTitle}
                            onChange={handleChange}
                            name={
                                modeNow === 'add-item' ||
                                modeNow === 'update-item'
                                    ? 'itemTitle'
                                    : 'columnTitle'
                            }
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
                            <label
                                htmlFor="description"
                                className="modal__label"
                            >
                                Description
                            </label>
                        </div>
                    ) : (
                        ''
                    )}
                    <div className="modal__ctrl">
                        <button
                            type="submit"
                            className={
                                isFormValid()
                                    ? 'btn btn--invalid'
                                    : 'btn btn--ok'
                            }
                            disabled={isFormValid()}
                        >
                            Update
                        </button>
                        <button
                            className="btn btn--cancel"
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
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
