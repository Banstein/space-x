import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';

const reducer = combineReducers({ missionsReducer });
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
