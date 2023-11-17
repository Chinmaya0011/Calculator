import React from 'react';
import style from './App.module.css';

function ButtonContainer({ mainButton,onClickButton}) {
  return (
    <div className={style.buttonsContainer}>
      <button className={style.button} onClick={onClickButton}>{mainButton}</button>

    </div>
  );
}

export default ButtonContainer;
