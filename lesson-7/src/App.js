import React, {useCallback, useMemo, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutPut from "./components/Demo/DemoOutPut";
import DemoList from "./components/UI/List/DemoList";

function App() {
  const [showParagraph, setParagraph] = useState(true);
  const [toggleParagraph, setToggleParagraph] = useState(false);
  const [listTittle, setListTittle] = useState('My List');

  const listItems =  useMemo( () =>[5,3,4,9,10,12], []);
  console.log('App Running');

  const setShowParagraph = useCallback(() => {
    setParagraph((prevState) => !prevState);
  },[]);
  const toggleParagraphHandler = useCallback(() => {
    console.log('Toggle');
    if(toggleParagraph){
      setParagraph((prevState) => !prevState);
    }
  },[toggleParagraph]);
  const toggleHandler = useCallback(() => {
    setToggleParagraph((prevState) => !prevState);
  }, []);

  console.log('App RUN');
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutPut show={showParagraph}/>
      <DemoList items={listItems} title={listTittle}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <Button onClick={toggleHandler}>Set Toggle</Button>
    </div>
  );
}

export default App;
