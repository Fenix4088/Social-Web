import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type AppPropsTypes = {
  posts: Array<PostsDataType>
  dialogsData: Array<DialogItemType>
  messagesData: Array<MessageDataType>
}
export type PostsDataType = {
  id: number
  message: string
  likes: number
}
export type MessageDataType = {
  id: number
  message: string
}
export type DialogItemType = {
  name: string
  id: number
}

const dialogsData: Array<DialogItemType> = [
  { id: 1, name: 'Yehor' }, { id: 2, name: 'Andrey' }, { id: 3, name: 'Viktor' },
  { id: 4, name: 'Dima' }, { id: 5, name: 'Sveta' }
];
const messagesData: Array<MessageDataType> = [
  { id: 1, message: 'Hi' }, { id: 2, message: 'How are you?' }, { id: 3, message: 'Where are you from?' },
  { id: 4, message: 'Nice picture? bro!!!!' }, { id: 5, message: 'I miss you :-(' }
];


const postsData: Array<PostsDataType> = [
  { id: 1, message: 'Good day', likes: 15 },
  { id: 2, message: 'Nice weather', likes: 6 },
  { id: 3, message: 'I was in Rome!!!!', likes: 0 }
];
ReactDOM.render(
  <App posts={postsData} dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


