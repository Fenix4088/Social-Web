import React from 'react';
import Post from './Post/Post';

import classes from './MyPosts.module.css';


const MyPosts = () => {

  return (
    <div>
      My posts
      <div>New post</div>
      <div>
        <Post message={"Hi, how are you?"} likeCount={15}/>
        <Post message={"I like this app!!"} likeCount={7}/>
        <Post message={"Nice weather :-)"} likeCount={1}/>
      </div>
    </div>
  );
};

export default MyPosts;

