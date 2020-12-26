import React from 'react';
import { FriendsItemType } from '../../../redux/state';
import { Friend } from './Friend/Friend';
import classes from './FriendsSidebarWidget.module.scss';

type FriendsSidebarWidgetType = {
  friends: Array<FriendsItemType>
}

export const FriendsSidebarWidget: React.FC<FriendsSidebarWidgetType> = (props) => {
  return (
    <div>
      <h3 className={classes.title}>My friends</h3>
      <div className={classes.friendsWrapper}>
        {props.friends.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name} logo={friend.logo}/> )}
      </div>
    </div>
  );
}