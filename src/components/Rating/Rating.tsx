import React from 'react';

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
  console.log('Rating rendering');

  if(props.value === 1) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if(props.value === 2) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if(props.value === 3) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if(props.value === 4) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
      </div>
    );
  }
  if(props.value === 5) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }



  return (
    <div>
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
    </div>
  );

}

type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {
  if (props.selected) {
    console.log('Star B rendering');
    return (
      <span><b>start </b></span>
    );
  } else {
    return (
      <span>start </span>
    );
  }
}