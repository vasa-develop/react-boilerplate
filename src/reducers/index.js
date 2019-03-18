import { combineReducers } from "redux";
import DummyReducer from './dummyReducer';

export default combineReducers({
    dummy: DummyReducer
})