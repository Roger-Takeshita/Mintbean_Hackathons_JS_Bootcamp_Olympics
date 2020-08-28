import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import boardItemsReducer from './redux/boardItems';

const reducers = combineReducers({
    boardItems: boardItemsReducer,
});

const store = createStore(reducers, applyMiddleware(logger));

export default store;
