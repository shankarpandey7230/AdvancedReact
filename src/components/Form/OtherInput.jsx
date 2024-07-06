import React, { useState } from 'react';

const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInput = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('react');
  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };
  const handleFramework = (e) => {
    setFramework(e.target.value);
  };
  return (
    <div>
      <form className="form">
        <h4>other input</h4>
        <div className="form-row" style={{ textAlign: 'left' }}>
          <input
            type="checkbox"
            id="shipping"
            checked={shipping}
            name="shipping"
            onChange={handleShipping}
          />
          <label htmlFor="shipping">Free Shipping</label>
        </div>
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select name="framework" id="framework" onChange={handleFramework}>
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default OtherInput;
