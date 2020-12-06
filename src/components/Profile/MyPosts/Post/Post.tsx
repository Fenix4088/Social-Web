import React from 'react';

import classes from './Post.module.css';

interface PostTypes {
  message: string,
  likeCounts: number,
}

const Post = (props: PostTypes) => {
  return (
    <div className={classes.item}>
      <img className={classes.item_img} src="https://fwcdn.pl/webv/23/84/22384/z01.22384.4.jpg" alt="Avatar" />
      {props.message}
      <div>
        <span>Like {props.likeCounts}</span>
      </div>
    </div>
  );
};

export default Post;

