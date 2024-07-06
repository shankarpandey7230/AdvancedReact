import React, { useState } from 'react';

const UnControlled = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    // const name = formData.get('name');
    // console.log(name);
    // console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    // do something (post request, add to list, etc)
    console.log(newUser);
    // Gotcha - re-render won't clear out the values
    setValue(value + 1);
    // reset values
    e.currentTarget.reset();
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="text" className="form-input" name="email" />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input type="text" className="form-input" name="password" />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default UnControlled;
