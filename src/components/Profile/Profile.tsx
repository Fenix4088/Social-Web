import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/reduxStore";

export type ProfilePropsType = {
    store: StoreType
};

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </main>
    );
};

export default Profile;
