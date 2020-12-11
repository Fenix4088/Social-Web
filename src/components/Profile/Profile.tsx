import React from 'react';
import MyPosts from './MyPosts/MyPosts';

import classes from './Profile.module.css'


const Profile = () => {

  return  (
    <main>
      <div >
        <img className={classes.imgHolder} src="https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"
             alt="Background personal" />
      </div>
      <div>
        avatar + desc
      </div>
      <MyPosts />
    </main>

  );
}

export default Profile;

