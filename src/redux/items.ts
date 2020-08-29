import { MoveItProps, Item } from '../utils/types';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';

export const addItem = (data: Item) => ({
    type: ADD_ITEM,
    payload: data,
});

export const updateItem = (data: MoveItProps) => ({
    type: UPDATE_ITEM,
    payload: data,
});

export const deleteItem = (idx: number) => ({
    type: DELETE_ITEM,
    payload: idx,
});


const initialState:Item[] = [
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
    action: { type: string; payload: MoveItProps }
) {
    switch (action.type) {
        case ADD_ITEM:
            return state;
        case UPDATE_ITEM:
            const newItems = state.filter(
                (item, idx) => idx !== action.payload.dragIndex
            );
            newItems.splice(
                action.payload.hoverIndex,
                0,
                state[action.payload.dragIndex]
            );
            return [...newItems];
        case DELETE_ITEM:
            return state;
        default:
            return state;
    }
}

export default itemsReducer;
