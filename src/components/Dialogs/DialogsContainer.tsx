import React, {ChangeEvent, useContext} from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsPageReducer";
import {StoreType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";
import { StoreContext } from "../../StoreContext";
import {connect} from "react-redux";

type DialogsPropsType = {
    store: StoreType
};

export const DialogsContainer: React.FC = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const onTextareaChangeHandler = (value: string) => {
                    store.dispatch(updateNewMessageCreator(value));
                };
                const onSendBtnClick = () => store.dispatch(sendMessageCreator());

                return (
                    <Dialogs
                        updateNewMessage={onTextareaChangeHandler}
                        onSendBtnClick={onSendBtnClick}
                        dialogsPageData={store.getState().dialogsPageData}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};



/*const mapStateToProps = (state: any): any => {
    return {
        dialogsPageData: state.dialogsPage
    };
};

const mapDispatchToProps = (dispatch: any): any => {
    return {
        updateNewMessage: (value: string) => {
            dispatch(updateNewMessageCreator(value));
        },
        onSendBtnClick: () => {
            dispatch(sendMessageCreator());
        }
    };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);*/
