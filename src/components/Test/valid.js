import React from 'react';

const validText = (props) => {

  let infoText = null;

  if(props.textLength === 0) {

  } else if (props.textLength < 5) {
      infoText = (
       <p>Text is too short!</p>
      )
  } else if (props.textLength > 15) {
    infoText = (
      <p>Text is too long!</p>
    )
  }

  return infoText;
};

export default validText;
