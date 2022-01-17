import { combineReducers } from "redux";
import { utilityReducer } from "./utility";

const rootReducer = combineReducers({
    utility: utilityReducer
});

export default rootReducer;