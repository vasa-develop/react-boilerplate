import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from '../reducers';

const middlewares = [thunk];

const intialState = {};

const Store = createStore(RootReducer, intialState, applyMiddleware(...middlewares));

export default Store;