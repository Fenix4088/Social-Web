import React, { ChangeEvent } from "react";

import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";

import classes from "./Dialogs.module.scss";
import {
    ActionType,
    DialogItemType,
    MessageDataType,
} from "../../redux/store";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsPageReducer";

type DialogsPropsType = {
    data: {
        dialogsData: Array<DialogItemType>;
        messagesData: Array<MessageDataType>;
        newMessageText: string;
    };
    dispatch: (action: ActionType) => void;
};

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const { newMessageText } = props.data;

    const onTextareaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.currentTarget;
        props.dispatch(updateNewMessageCreator(value));
    };
    const onSendBtnClick = () => props.dispatch(sendMessageCreator());

    return (
        <div className={classes.dialog}>
            <div className={classes.dialogItems}>
                {props.data.dialogsData.map((dialog) => (
                    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} logo={dialog.logo} />
                ))}
            </div>

            <div className={classes.messages}>
                {props.data.messagesData.map((message) => (
                    <Message key={message.id} message={message.message} />
                ))}
            </div>

            <div>
                <textarea
                    onChange={onTextareaChangeHandler}
                    value={newMessageText}
                    placeholder={"Enter your message..."}
                />
                <button onPointerDown={onSendBtnClick}>Send</button>
            </div>
        </div>
    );
};
