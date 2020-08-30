import { ItemReducer } from '../utils/types';
const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSE = 'MODAL_CLOSE';

export const modalOpen = (data: {}) => ({
    type: MODAL_OPEN,
    payload: data,
});

export const modalClose = () => ({
    type: MODAL_CLOSE,
});

const initialState = {
    itemTitle: '',
    itemDescription: '',
    columnId: -1,
    columnTitle: '',
    mode: '',
};
function modalReducer(
    state = initialState,
    action: { type: string; payload: ItemReducer }
) {
    switch (action.type) {
        case MODAL_OPEN:
            return { ...state, ...action.payload };
        case MODAL_CLOSE:
            return initialState;
        default:
            return state;
    }
}

export default modalReducer;
