import React, { useState, useEffect } from 'react';

const Cleanupfunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggleComponenet
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm this is interesting');
    const intId = setInterval(() => {
      //   console.log('hello from interval');
    }, 1000);
    // does not stop, keep going
    // everytime we render component new interval get created
    return () => {
      clearInterval(intId);
      console.log('clean up');
    };
  }, []);
  return <h1>Hello there</h1>;
};

export default Cleanupfunction;
