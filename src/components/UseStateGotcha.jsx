import React, { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue(value + 1);
    // solution to the above gotcha

    setValue((currentValue) => {
      const newValue = currentValue + 1;
      return newValue;
      // console.log(currentValue);
    });
    // console.log(value);
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

export default UseStateGotcha;
