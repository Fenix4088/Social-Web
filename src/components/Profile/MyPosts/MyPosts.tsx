import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import { PostsDataType } from '../../../redux/state';

type MyPostsPropsType = {
  posts: Array<PostsDataType>
  addPost: Function
}

const MyPosts = (props: MyPostsPropsType) => {
  const newPostElement = React.createRef<HTMLTextAreaElement>();


  const addPost = () => {
    let text = newPostElement.current?.value;
    props.addPost(text);
    if (newPostElement.current) {
      newPostElement.current.value = "";
    }

  };


  return (
    <div className={classes.postBlock}>
      <h2>My posts</h2>
      <div className={classes.postEdit}>
        <textarea ref={newPostElement}></textarea>
        <button onPointerDown={addPost}>Add post</button>
      </div>
      <div>

        {props.posts.map(post => <Post key={post.id} message={post.message} likeCount={post.likes} />)}

      </div>
    </div>
  );
};

export default MyPosts;
