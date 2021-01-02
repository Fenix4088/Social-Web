import React, {ChangeEvent, useContext} from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsPageReducer";
import {StoreType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

/*
type DialogsPropsType = {
    store: StoreType
};
*/


export const DialogsContainer: React.FC = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const {dialogsPageData} = store.getState();

                    const onTextareaChangeHandler = (value: string) => {
                        store.dispatch(updateNewMessageCreator(value));
                    };
                    const onSendBtnClick = () => store.dispatch(sendMessageCreator());

                    return (
                        <Dialogs
                            updateNewMessage={onTextareaChangeHandler}
                            onSendBtnClick={onSendBtnClick}
                            dialogsPageData={dialogsPageData}
                        />
                    );
                }
            }

        </StoreContext.Consumer>
    );
};
