import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.scss";
import { ActionType, PostsDataType } from "../../redux/state";

export type ProfilePropsType = {
    data: {
        postsData: Array<PostsDataType>;
        newPostText: string;
    };
    dispatch: (action: ActionType) => void;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPosts posts={props.data.postsData} newPostText={props.data.newPostText} dispatch={props.dispatch} />
        </main>
    );
};

export default Profile;
