import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: ' reading books',
  });

  const displayPerson = () => {
    setPerson({ name: 'john', age: 25, hobby: ' screaming' });
  };

  return (
    <>
      <h2>UseStateObject Example</h2>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h4>Enjoys To:{person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show John
      </button>
    </>
  );
};

export default UseStateObject;
