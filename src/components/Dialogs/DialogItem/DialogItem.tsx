import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./DialogItem.module.scss";
import {DialogItemType} from "../../../redux/entities";

export const DialogItem: React.FC<DialogItemType> = (props) => {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <img className={classes.userLogo} src={props.logo} alt="Avatar" />
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};
