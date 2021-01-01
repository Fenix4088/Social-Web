import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StateType } from "./redux/store";
import React from "react";
import {store} from "./redux/reduxStore";

const rerenderEntireTree = (state: StateType): void => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state);
});
