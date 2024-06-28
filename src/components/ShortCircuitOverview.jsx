import React, { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('Shankar');
  const textExample = text || 'hello world';
  return (
    <div>
      <h4>Falsy OR {text || 'hello world'}</h4>
      <h4>Falsy AND {text && 'hello world'}</h4>
      <h4>Truthy OR {name || 'hello world'}</h4>
      <h4>Truthy AND {name && 'hello world'}</h4>
      {textExample}
    </div>
  );
};

export default ShortCircuitOverview;
