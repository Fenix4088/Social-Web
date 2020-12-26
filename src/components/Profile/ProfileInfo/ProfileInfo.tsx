import React from 'react';
import classes from './ProfileInfo.module.scss';



const ProfileInfo = () => {

  return (
    <div>
      <div>
        <img className={classes.imgHolder}
             src="https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"
             alt="Background personal" />
      </div>
      <div className={classes.descriptionBlock}>
        avatar + desc
      </div>
    </div>
  );
};

export default ProfileInfo;

