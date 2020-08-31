import { Item, ItemReducer } from '../utils/types';
import { v4 as uuidv4 } from 'uuid';
const ADD_ITEM = 'ADD_ITEM';
const ADD_ITEMS = 'ADD_ITEMS';
const DELETE_ITEM = 'DELETE_ITEM';
const DELETE_ITEMS = 'DELETE_ITEMS';
const UPDATE_ITEM = 'UPDATE_ITEM';
const UPDATE_ITEM_INFO = 'UPDATE_ITEM_INFO';
const UPDATE_ITEM_COLUMN = 'UPDATE_ITEM_COLUMN';

export const setItems = (data: ItemReducer) => ({
    type: ADD_ITEMS,
    payload: data,
});

export const addItem = (data: ItemReducer) => ({
    type: ADD_ITEM,
    payload: data,
});

export const updateItem = (data: ItemReducer) => ({
    type: UPDATE_ITEM,
    payload: data,
});

export const updateItemInfo = (data: ItemReducer) => ({
    type: UPDATE_ITEM_INFO,
    payload: data,
});

export const updateItemColumn = (data: ItemReducer) => ({
    type: UPDATE_ITEM_COLUMN,
    payload: data,
});

export const deleteItem = (data: ItemReducer) => ({
    type: DELETE_ITEM,
    payload: data,
});

export const deleteItems = (data: ItemReducer) => ({
    type: DELETE_ITEMS,
    payload: data,
});

const initialState: Item[] = [];

function itemsReducer(
    state = initialState,
    action: { type: string; payload: ItemReducer }
) {
    switch (action.type) {
        case ADD_ITEMS:
            return [...action.payload.items];
        case ADD_ITEM:
            const newItem = {
                itemId: uuidv4(),
                itemTitle: action.payload.itemTitle,
                itemDescription: action.payload.itemDescription,
                columnId: action.payload.columnId,
            };

            return [...state, newItem];
        case UPDATE_ITEM:
            const nextState = state.filter(
                (item, idx) => idx !== action.payload.dragIndex
            );

            nextState.splice(
                action.payload.hoverIndex!,
                0,
                state[action.payload.dragIndex!]
            );

            return [...nextState];
        case UPDATE_ITEM_INFO:
            const itemIndex = state.findIndex(
                (each) => each.itemId === action.payload.itemId
            );
            const updateItem = state[itemIndex];
            updateItem!.columnId = action.payload.columnId!;
            updateItem!.itemTitle = action.payload.itemTitle!;
            updateItem!.itemDescription = action.payload.itemDescription!;
            const updatedState = [
                ...state.slice(0, itemIndex),
                updateItem,
                ...state.slice(itemIndex + 1, state.length),
            ];

            return updatedState;
        case UPDATE_ITEM_COLUMN:
            const nextItemColumn = state
                .filter((each) => {
                    return each.itemTitle !== action.payload.item!.itemTitle;
                })
                .concat({
                    ...action.payload.item!,
                    columnId: action.payload.newColumnId!,
                });

            return [...nextItemColumn];
        case DELETE_ITEM:
            return state.filter((each) => {
                return each.itemId !== action.payload.itemId;
            });
        case DELETE_ITEMS:
            return state.filter((each) => {
                return each.columnId !== action.payload.columnId;
            });
        default:
            return state;
    }
}

export default itemsReducer;
