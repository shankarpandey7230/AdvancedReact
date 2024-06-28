import React, { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);
  //   const toggleAlert = () => {
  //     if (showAlert) {
  //       setShowAlert(false);
  //       return;
  //     }
  //     setShowAlert(true);
  //   };
  return (
    <div>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        Toggle Alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};
const Alert = () => {
  return <div>Hello World</div>;
};

export default ToggleChallenge;
