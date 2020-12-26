import React from 'react';
import { FriendsItemType } from '../../../../redux/state';
import classes from "./Friends.module.scss"

export const Friend = (props: FriendsItemType) => {
  return (
    <div>
      <div >
        <img className={classes.userLogo} src={props.logo} alt="logo" />
        <div className={classes.name}>{props.name}</div>
      </div>
    </div>
  );
}