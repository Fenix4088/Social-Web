import React from 'react';
import './App.css';

import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';


function App() {
  return (
    <div>
      <PageTitle value={'This is App Component'} />
      Article 1
      <Rating value={3} />
      <Accordion titleValue={"Menu"} collapsed={true}/>
      <Accordion  titleValue={"Users"} collapsed={false}/>
      Artical 2
      <Rating value={4} />
    </div>
  );
}

type PageTitlePropsType = {
  value: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('App rendering');
  return (
    <h1>{props.value}</h1>
  );
}

export default App;
