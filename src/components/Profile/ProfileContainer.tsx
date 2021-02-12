import React from "react";
import Profile from "./Profile";
import { UserProfileItemT } from "../../redux/entities";
import { RouteComponentProps } from "react-router-dom";
import {usersAPI} from "../../API/api";

type ProfileContainerPropsT = {
    setUserProfile: (profile: UserProfileItemT) => void;
    profile: UserProfileItemT;
    defaultUserId: number;
};
type RouteType = {
    userId: string;
};

export class ProfileContainer extends React.Component<ProfileContainerPropsT & RouteComponentProps<RouteType>> {
    componentDidMount() {
        let userId = +this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        usersAPI.getUserProfile(userId).then((data) => {
            this.props.setUserProfile(data);
        });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}
