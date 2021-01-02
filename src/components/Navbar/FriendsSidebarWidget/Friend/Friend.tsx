import React from "react";
import classes from "./Friends.module.scss";
import {FriendsItemType} from "../../../../redux/entities";

export const Friend = (props: FriendsItemType) => {
    return (
        <div>
            <div>
                <img className={classes.userLogo} src={props.logo} alt="logo" />
                <div className={classes.name}>{props.name}</div>
            </div>
        </div>
    );
};
