import React from 'react';
import style from './App.module.css';

function Display({calVal}) {
  return (
    <div>
      <input type="text" id="display" className={style.display} readOnly value={calVal} placeholder='Result'/>
    </div>
  );
}

export default Display;
