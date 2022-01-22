import React from 'react';

const ButtonQtd = ({ type, item, func, text }) => {
  return (
    <div>
      <button type="button" className="btn btn-success" onClick={() => func(type, item)}>
        {text}
      </button>
    </div>
  );
};

export default ButtonQtd;
