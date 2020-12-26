import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {addPost, state, stateType, subscribe, updateNewPostText} from './redux/state';
import React from 'react';

 const rerenderEntireTree = (): void => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree();
subscribe(rerenderEntireTree);