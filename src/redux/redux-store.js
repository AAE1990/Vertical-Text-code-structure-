import { combineReducers, createStore } from "redux";
import verticalTextReducer from "./verText-reduser";

let reducers = combineReducers({
    verticalTextData: verticalTextReducer
})

const store = createStore(reducers);

window.store = store;

export default store;