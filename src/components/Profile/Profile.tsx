import React from 'react';
import classes from './Profile.module.css'


const Profile = () => {

  return  (
    <main className={classes.content}>
      <div>
        <img src="https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"
             alt="Background personal" />
      </div>
      <div>
        avatar + desc
      </div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div className={classes.item}>post 1</div>
          <div className={classes.item}>post 2</div>
          <div className={classes.item}>post 3</div>
        </div>
      </div>
    </main>

  );
}

export default Profile;

