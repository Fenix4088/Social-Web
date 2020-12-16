import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';
import { PostsDataType } from '../../redux/state';


export type ProfilePropsType = {
  data: {
    postsData: Array<PostsDataType>
  }
}

const Profile = (props: ProfilePropsType) => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts posts={props.data.postsData} />
    </main>

  );
};

export default Profile;

