import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { entriesReducer } from "./entriesReducer"

export const rootReducer = combineReducers({ user: userReducer, entries: entriesReducer })