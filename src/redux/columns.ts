const ADD_COLUMN = 'ADD_COLUMN';
const DELETE_COLUMN = 'DELETE_COLUMN';
const UPDATE_COLUMN = 'UPDATE_COLUMN';

export const addColumn = (data: {}) => ({
    type: ADD_COLUMN,
    payload: data,
});
export const updateColumn = (data: {}) => ({
    type: UPDATE_COLUMN,
    payload: data,
});
export const deleteColumn = (data: {}) => ({
    type: DELETE_COLUMN,
    payload: data,
});

const initialState = [
    {
        columnId: 0,
        columnTitle: 'First Column',
    },
    {
        columnId: 1,
        columnTitle: 'Second Column',
    },
    {
        columnId: 2,
        columnTitle: 'Third Column',
    },
];

function columnsReducer(
    state = initialState,
    action: { type: string; payload: {} }
) {
    switch (action.type) {
        case ADD_COLUMN:
            return state;
        case UPDATE_COLUMN:
            return state;
        case DELETE_COLUMN:
            return state;
        default:
            return state;
    }
}

export default columnsReducer;
