import React from 'react';
import classes from './Message.module.scss';


type MessageType = {
  message: string
}


export const Message:React.FC<MessageType> = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  );
};
