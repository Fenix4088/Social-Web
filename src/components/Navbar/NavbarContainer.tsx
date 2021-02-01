import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { AppStateType } from "../../redux/reduxStore";
import { FriendsItemType } from "../../redux/entities";

type MapStateType = {
    data: {
        friends: Array<FriendsItemType>;
    };
};

type MapDispatchType = {};

type OwnType = {};

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        data: {
            friends: state.sidebar.friends
        }
    };
};

export const NavbarContainer = connect<MapStateType, {}, {}, AppStateType>(mapStateToProps, {})(Navbar);
