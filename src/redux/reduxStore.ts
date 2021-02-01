import { combineReducers, createStore } from "redux";
import { profilePageReducer } from "./profilePageReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { sidebarReducer } from "./sidebarReducer";
import { usersReducer } from "./usersReducer";

export type StoreType = typeof store;

const rootReducer = combineReducers({
    profilePageData: profilePageReducer,
    dialogsPageData: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

// type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
