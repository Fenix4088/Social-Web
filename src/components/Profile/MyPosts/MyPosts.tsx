import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

type PostsDataType = {
  id: number
  message: string
  likes: number
}

const postsData: Array<PostsDataType> = [
  { id: 1, message: 'Good day', likes: 15 },
  { id: 2, message: 'Nice weather', likes: 6 },
  { id: 3, message: 'I was in Rome!!!!', likes: 0 }
];


const MyPosts = () => {

  return (
    <div className={classes.postBlock}>
      <h2>My posts</h2>
      <div className={classes.postEdit}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>

        {postsData.map(post => <Post key={post.id} message={post.message} likeCount={post.likes} />)}

      </div>
    </div>
  );
};

export default MyPosts;

