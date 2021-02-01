import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { StoreType } from "../../redux/reduxStore";

const Profile: React.FC = () => {
    return (
        <main>
            <ProfileInfo />
            <MyPostsContainer />
        </main>
    );
};

export default Profile;
