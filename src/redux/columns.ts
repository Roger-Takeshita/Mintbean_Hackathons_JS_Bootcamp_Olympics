import { MoveItProps, Column } from '../utils/types';
import { v4 as uuidv4 } from 'uuid';
const ADD_COLUMN = 'ADD_COLUMN';
const DELETE_COLUMN = 'DELETE_COLUMN';
const UPDATE_COLUMN = 'UPDATE_COLUMN';
const UPDATE_COLUMN_INFO = 'UPDATE_COLUMN_INFO';

export const addColumn = (data: {}) => ({
    type: ADD_COLUMN,
    payload: data,
});

export const updateColumn = (data: MoveItProps) => ({
    type: UPDATE_COLUMN,
    payload: data,
});

export const updateColumnInfo = (data: string) => ({
    type: UPDATE_COLUMN_INFO,
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
    action: { type: string; payload: MoveItProps }
) {
    switch (action.type) {
        case ADD_COLUMN:
            return [
                ...state,
                { columnId: Math.random() * 16, columnTitle: action.payload },
            ];
        case UPDATE_COLUMN:
            const nextColumn = state.filter(
                (column, idx) => idx !== action.payload.dragIndex
            );
            nextColumn.splice(
                action.payload.hoverIndex!,
                0,
                state[action.payload.dragIndex!]
            );
            return [...nextColumn];
        case UPDATE_COLUMN_INFO:
            console.log(action.payload);
            return state;
        case DELETE_COLUMN:
            return state;
        default:
            return state;
    }
}

export default columnsReducer;
