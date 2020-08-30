import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import columnsReducer from './redux/columns';
import itemsReducer from './redux/items';
import modalReducer from './redux/modal';

const reducers = combineReducers({
    columns: columnsReducer,
    items: itemsReducer,
    modal: modalReducer,
});

const store = createStore(reducers, applyMiddleware(logger));

export default store;
