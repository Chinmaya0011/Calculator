// App.js
import React, { useState } from 'react';
import style from './App.module.css';
import Display from './Display';
import Buttons from './Buttons';

function App() {
  const buttons = [
    { button: 'C' }, { button: '=' },{ button: 'X' },{ button: 1 }, { button: 2 }, { button: 3 }, { button: 4 }, { button: 5 },
    { button: 6 }, { button: 7 }, { button: 8 }, { button: 9 }, { button: 0 },
     { button: '-' }, { button: '+' }, { button: '/' },
    { button: '*' }, { button: '.' },
  ];

const [disVal,setDisval]=useState("")


  return (
    <div className={style.calculator}>
      <Display calVal={disVal}/>
      <Buttons buttons={buttons} setDisval={setDisval} disVal={disVal}/>
    </div>
  );
}

export default App;
