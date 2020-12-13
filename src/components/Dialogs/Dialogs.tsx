import React from 'react';

import { Message } from './Message/Message';
import { DialogItem, DialogItemType } from './DialogItem/DialogItem';

import classes from './Dialogs.module.css';


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

