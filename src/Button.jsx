import React from 'react';

const Button = ({ props, buttonText }) => {
  return (
    <button
      type="button"
      className={buttonText === props.reqType ? "selected" : null }
      onClick={() => props.setReqType(buttonText)}
        
    >
      {buttonText}
    </button>
  );
};

export default Button;
