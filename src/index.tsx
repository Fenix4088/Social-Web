import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {store, StateType} from './redux/state';
import React from 'react';


 const rerenderEntireTree = (state: StateType): void => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);