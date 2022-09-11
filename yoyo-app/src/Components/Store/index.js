import {createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers  from '../Reducers/index';

const initialState = {};
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers, composeWithDevTools());

export default store