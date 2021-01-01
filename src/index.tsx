import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import {store} from "./redux/reduxStore";

const rerenderEntireTree = (): void => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>,
        document.getElementById("root")
    );
};


rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree();
});
