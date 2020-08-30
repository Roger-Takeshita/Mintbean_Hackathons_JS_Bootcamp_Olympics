import { MoveItProps, Column, ItemReducer } from '../utils/types';
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

export const updateColumnInfo = (data: ItemReducer) => ({
    type: UPDATE_COLUMN_INFO,
    payload: data,
});

export const deleteColumn = (data: {}) => ({
    type: DELETE_COLUMN,
    payload: data,
});

const initialState = [
    {
        columnId: 'a16fba42-88ae-4b18-b4e5-c48a58679c39',
        columnTitle: 'First Column',
    },
    {
        columnId: '3c28b6c7-5667-4c99-b231-eec63c20ae5d',
        columnTitle: 'Second Column',
    },
    {
        columnId: 'e6ff4872-9657-40c8-b15e-bc020d95de0a',
        columnTitle: 'Third Column',
    },
];

function columnsReducer(
    state = initialState,
    action: { type: string; payload: ItemReducer }
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
            const columnIndex = state.findIndex(
                (each) => each.columnId === action.payload.columnId
            );
            const nextUpdate = state.filter((each) => {
                return each.columnId !== action.payload.columnId;
            });
            const updatedColumn = state[columnIndex];
            updatedColumn!.columnTitle = action.payload.columnTitle!;
            nextUpdate.splice(columnIndex, 0, updatedColumn);

            return [...nextUpdate];
        case DELETE_COLUMN:
            return state;
        default:
            return state;
    }
}

export default columnsReducer;
