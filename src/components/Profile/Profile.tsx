import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.scss';
import {PostsDataType} from '../../redux/state';


export type ProfilePropsType = {
    data: {
        postsData: Array<PostsDataType>
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (value: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts
                posts={props.data.postsData}
                addPost={props.addPost}
                newPostText={props.data.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </main>

    );
};

export default Profile;

