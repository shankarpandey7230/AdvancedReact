import React, { useState } from 'react';

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ',',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // console.log('form subtmitted');
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            className="form-input"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="text"
            className="form-input"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-block">submit</button>
      </form>
    </div>
  );
};

export default MultipleInputs;
