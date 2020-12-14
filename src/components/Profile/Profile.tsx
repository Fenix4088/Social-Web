import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { PostsDataType } from '../../index';
import classes from './Profile.module.css';


export type MyPostsPropsType = {
  posts: Array<PostsDataType>
}

const Profile = (props: MyPostsPropsType) => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts posts={props.posts}/>
    </main>

  );
};

export default Profile;

