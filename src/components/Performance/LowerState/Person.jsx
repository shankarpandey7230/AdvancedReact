import React, { useEffect } from 'react';

const Person = ({ name }) => {
  console.log('render');
  //   useEffect(() => {
  //     console.log('unfortunate this will not fix the issue');
  //   }, []);
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};

export default Person;
