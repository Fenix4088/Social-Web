import React from 'react';

import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type DialogItemType = {
  name: string
  id: number
}

type MessageType = {
  message: string
}

type MessageDataType = {
  id: number
  message: string
}


const dialogsData: Array<DialogItemType> = [
  { id: 1, name: 'Yehor' }, { id: 2, name: 'Andrey' }, { id: 3, name: 'Viktor' },
  { id: 4, name: 'Dima' }, { id: 5, name: 'Sveta' }
];

const messagesData: Array<MessageDataType> = [
  { id: 1, message: 'Hi' }, { id: 2, message: 'How are you?' }, { id: 3, message: 'Where are you from?' },
  { id: 4, message: 'Nice picture? bro!!!!' }, { id: 5, message: 'I miss you :-(' }
];



const DialogItem = (props: DialogItemType) => {
  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props: MessageType) => {
  return (
    <div className={classes.message}>{props.message}</div>
  );
};

export const Dialogs = () => {

  return (
    <div className={classes.dialog}>
      <div className={classes.dialogItems}>

        {dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)}

      </div>

      <div className={classes.messages}>

        {messagesData.map(message => <Message key={message.id} message={message.message} />)}

      </div>

    </div>
  );
};

