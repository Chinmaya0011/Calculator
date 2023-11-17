// Buttons.js
import React from 'react';
import ButtonContainer from './ButtonContainer';

function Buttons({ buttons, setDisval, disVal }) {
  const onClickButton = (buttonText) => {
    if (buttonText === "C") {
      setDisval("");
    } else if (buttonText === "=") {
      
        const result = eval(disVal);
        setDisval(result.toString());
     
      
    } 
    
    else if (buttonText === "X") { // Assuming "X" is the button for deleting the last character
      const newVal = disVal.slice(0, -1); // Remove the last character
      setDisval(newVal);
    } 
    
    else {
      const newVal = disVal + buttonText;
      setDisval(newVal);
    }
  };

  return (
    <>
      {buttons.map((item, index) => (
        <ButtonContainer key={index} mainButton={item.button} onClickButton={() => onClickButton(item.button)} />
      ))}
    </>
  );
}

export default Buttons;
