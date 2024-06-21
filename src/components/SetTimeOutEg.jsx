import React, { useState } from 'react';

const SetTimeOutEg = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log('clicked the button');
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default SetTimeOutEg;
