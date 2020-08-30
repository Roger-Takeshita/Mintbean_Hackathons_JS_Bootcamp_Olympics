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
    index: -1,
};
function modalReducer(
    state = initialState,
    action: { type: string; payload: {} }
) {
    switch (action.type) {
        case MODAL_OPEN:
            //TODO create add new information to modal

            break;
        case MODAL_CLOSE:
            return initialState;
        default:
            return state;
    }
}

export default modalReducer;
