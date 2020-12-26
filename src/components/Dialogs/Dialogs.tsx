import React from 'react';

import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';

import classes from './Dialogs.module.scss';
import { DialogItemType, MessageDataType } from '../../redux/state';

type DialogsPropsType = {
  data: {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageDataType>
  }
}

export const Dialogs:React.FC<DialogsPropsType> = (props) => {
  return (
    <div className={classes.dialog}>

      <div className={classes.dialogItems}>
      
        {props.data.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} logo={dialog.logo} />)}

      </div>

      <div className={classes.messages}>

        {props.data.messagesData.map(message => <Message key={message.id} message={message.message} />)}

      </div>

    </div>
  );
};

