import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {sidebarReducer} from "./sidebarReducer";

export type StoreType = typeof store;

const rootReducer = combineReducers({
    profilePageData: profilePageReducer,
    dialogsPageData: dialogsPageReducer,
    sidebar: sidebarReducer
});

// type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);


