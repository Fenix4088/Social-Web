import React, {ChangeEvent, useContext} from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsPageReducer";
import {AppStateType, StoreType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {dialogsPageDataType} from "../../redux/entities";


type MapStatePropsType = {
    dialogsPageData: dialogsPageDataType
}

type MapDispatchPropsType = {
    updateNewMessage: (value: string) => void
    onSendBtnClick: () => void
}

type OwmPropsType = {

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPageData: state.dialogsPageData
    };
};

const mapDispatchToProps = (dispatch: any): MapDispatchPropsType => {
    return {
        updateNewMessage: (value: string) => {
            dispatch(updateNewMessageCreator(value));
        },
        onSendBtnClick: () => {
            dispatch(sendMessageCreator());
        }
    };
};

// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export const DialogsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwmPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);
