const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';

export const addItemToBoard = (data: {}) => ({
    type: ADD_ITEM,
    payload: data,
});
export const updateItemToBoard = (data: {}) => ({
    type: ADD_ITEM,
    payload: data,
});
export const deleteItemToBoard = (data: {}) => ({
    type: ADD_ITEM,
    payload: data,
});

const initialState = {
    counter: 3,
    board: [
        {
            columnTitle: 'First Column',
            columnContent: [
                {
                    itemTitle: 'First Item of column 1',
                    itemDescription: 'Description of the first item column 1',
                },
            ],
        },
        {
            columnTitle: 'Second Column',
            columnContent: [
                {
                    itemTitle: 'First Item of column 2',
                    itemDescription: 'Description of the first item column 2',
                },
            ],
        },
        {
            columnTitle: 'Third Column',
            columnContent: [
                {
                    itemTitle: 'First Item of column 3',
                    itemDescription: 'Description of the first item column 3',
                },
            ],
        },
    ],
};

function boardItemsReducer(
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

export default boardItemsReducer;
