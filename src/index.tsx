import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import {store} from "./redux/reduxStore";
import { Provider } from "react-redux";
import { StoreContext } from "./StoreContext";

const rerenderEntireTree = (): void => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById("root")
    );
};


rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree();
});
