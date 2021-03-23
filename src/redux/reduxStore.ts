import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import { profilePageReducer } from "./profilePageReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { sidebarReducer } from "./sidebarReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "./appReducer";

export type StoreType = typeof store;

const rootReducer = combineReducers({
    profilePageData: profilePageReducer,
    dialogsPageData: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    appReducer,
    form: formReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

export type AppDispatchType<AT extends Action> = ThunkDispatch<AppStateType, unknown, AT>;

export const store = createStore(rootReducer, applyMiddleware(thunk));

//! For Dev
//@ts-ignore
window.state = store.getState();
