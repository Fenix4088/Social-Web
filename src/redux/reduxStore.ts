import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {sidebarReducer} from "./sidebarReducer";

export type StoreType = typeof store;

const reducers = combineReducers({
    profilePageData: profilePageReducer,
    dialogsPageData: dialogsPageReducer,
    sidebar: sidebarReducer
});



export const store = createStore(reducers);

