import React, { useState, useEffect } from 'react';

const UseEffectMultiple = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('hello from the useEffect');
  }, [value]);
  useEffect(() => {
    console.log('hello from the second');
  }, [secondValue]);
  return (
    <div>
      <h1>value:{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        value
      </button>
      <h1>second value :{secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue)}>
        Second Value
      </button>
    </div>
  );
};

export default UseEffectMultiple;
