const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';

export const addItemToBoard = (data: {}) => ({
    type: ADD_ITEM,
    payload: data,
});

export const updateItemToBoard = (data: {}) => ({
    type: UPDATE_ITEM,
    payload: data,
});

export const deleteItemToBoard = (data: {}) => ({
    type: DELETE_ITEM,
    payload: data,
});

const initialState = [
    {
        columnId: 0,
        itemTitle: 'First Item of column 1',
        itemDescription: 'Description of the first item column 1',
    },
    {
        columnId: 0,
        itemTitle: 'First Item of column 2',
        itemDescription: 'Description of the first item column 2',
    },
    {
        columnId: 0,
        itemTitle: 'First Item of column 3',
        itemDescription: 'Description of the first item column 3',
    },
]

function itemsReducer(
    state = initialState,
    action: { type: string; payload: {} }
) {
    switch (action.type) {
        case ADD_ITEM:
            return state;
        case UPDATE_ITEM:
            return state;
        case DELETE_ITEM:
            return state;
        default:
            return state;
    }
}

export default itemsReducer;
