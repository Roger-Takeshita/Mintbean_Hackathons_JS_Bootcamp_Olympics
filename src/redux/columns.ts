import { MoveItProps, ItemReducer, Column } from '../utils/types';
import { v4 as uuidv4 } from 'uuid';
const ADD_COLUMN = 'ADD_COLUMN';
const ADD_COLUMNS = 'ADD_COLUMNS';
const DELETE_COLUMN = 'DELETE_COLUMN';
const UPDATE_COLUMN = 'UPDATE_COLUMN';
const UPDATE_COLUMN_INFO = 'UPDATE_COLUMN_INFO';

export const setColumns = (data: ItemReducer) => ({
    type: ADD_COLUMNS,
    payload: data,
});

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

export const deleteColumn = (id: ItemReducer) => ({
    type: DELETE_COLUMN,
    payload: id,
});

const initialState: Column[] = [];

function columnsReducer(
    state = initialState,
    action: { type: string; payload: ItemReducer }
) {
    switch (action.type) {
        case ADD_COLUMNS:
            return [...action.payload.columns];
        case ADD_COLUMN:
            const newItem = { columnId: uuidv4(), columnTitle: action.payload };

            return [...state, newItem];
        case UPDATE_COLUMN:
            const nextState = state.filter(
                (column, idx) => idx !== action.payload.dragIndex
            );
            nextState.splice(
                action.payload.hoverIndex!,
                0,
                state[action.payload.dragIndex!]
            );

            return [...nextState];
        case UPDATE_COLUMN_INFO:
            const columnIndex = state.findIndex(
                (each) => each.columnId === action.payload.columnId
            );
            const updateItem = state[columnIndex];
            updateItem!.columnTitle = action.payload.columnTitle!;
            const updatedState = [
                ...state.slice(0, columnIndex),
                updateItem,
                ...state.slice(columnIndex + 1, state.length),
            ];

            return updatedState;
        case DELETE_COLUMN:
            return state.filter((each) => {
                return each.columnId !== action.payload.columnId;
            });
        default:
            return state;
    }
}

export default columnsReducer;
