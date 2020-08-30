import { MoveItProps, Item, ItemReducer, ColumnProps } from '../utils/types';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const UPDATE_ITEM_INFO = 'UPDATE_ITEM_INFO';
const UPDATE_ITEM_COLUMN = 'UPDATE_ITEM_COLUMN';

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

export const deleteItem = (idx: ItemReducer) => ({
    type: DELETE_ITEM,
    payload: idx,
});

const initialState: Item[] = [
    {
        columnId: 0,
        itemTitle: 'First Item of column 1x1',
        itemDescription: 'Description 1x1',
    },
    {
        columnId: 0,
        itemTitle: 'First Item of column 1x2',
        itemDescription: 'Description 1x2',
    },
    {
        columnId: 0,
        itemTitle: 'First Item of column 1x3',
        itemDescription: 'Description 1x3',
    },
    {
        columnId: 1,
        itemTitle: 'Second Item of column 2x1',
        itemDescription: 'Description 2x1',
    },
    {
        columnId: 1,
        itemTitle: 'Second Item of column 2x2',
        itemDescription: 'Description 2x2',
    },
    {
        columnId: 1,
        itemTitle: 'Second Item of column 2x3',
        itemDescription: 'Description 2x3',
    },
    {
        columnId: 2,
        itemTitle: 'Third Item of column 3x1',
        itemDescription: 'Description 3x1',
    },
    {
        columnId: 2,
        itemTitle: 'Third Item of column 3x2',
        itemDescription: 'Description 3x2',
    },
    {
        columnId: 2,
        itemTitle: 'Third Item of column 3x3',
        itemDescription: 'Description 3x3',
    },
];

function itemsReducer(
    state = initialState,
    action: { type: string; payload: ItemReducer }
) {
    switch (action.type) {
        case ADD_ITEM:
            const newItem = action.payload;
            return [
                ...state,
                {
                    itemTitle: newItem.itemTitle,
                    itemDescription: newItem.itemDescription,
                    columnId: newItem.columnId,
                },
            ];
        case UPDATE_ITEM:
            const nextItem = state.filter(
                (item, idx) => idx !== action.payload.dragIndex
            );

            nextItem.splice(
                action.payload.hoverIndex!,
                0,
                state[action.payload.dragIndex!]
            );
            return [...nextItem];
        case UPDATE_ITEM_INFO:
            console.log(action.payload);
            return state;
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
            const nextDeleteItem = state
            nextDeleteItem.splice(action.payload.idx!, 1)
            return [...nextDeleteItem];
        default:
            return state;
    }
}

export default itemsReducer;
