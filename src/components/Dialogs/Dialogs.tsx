import React from 'react';

import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type DialogItemType = {
  name: string
  id: string
}

const DialogItem = (props: DialogItemType) => {
  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

type MessageType = {
  message: string
}

const Message = (props: MessageType) => {
  return (
    <div className={classes.message}>{props.message}</div>
  );
};

export const Dialogs = () => {
  return (
    <div className={classes.dialog}>
      <div className={classes.dialogItems}>
        <DialogItem name={'Yehor'} id={'1'} />
        <DialogItem name={'Andrey'} id={'2'} />
        <DialogItem name={'Viktor'} id={'3'} />
        <DialogItem name={'Dima'} id={'4'} />
        <DialogItem name={'Sveta'} id={'5'} />
      </div>

      <div className={classes.messages}>
        <Message message={'Hi'} />
        <Message message={'How are you?'} />
        <Message message={'Nice weather, man!!!'} />
      </div>

    </div>
  );
};