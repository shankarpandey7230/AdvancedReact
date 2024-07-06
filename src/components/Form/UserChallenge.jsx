import React, { useState } from 'react';

import { data } from '../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('form submitted');
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updatedUser = [...users, newUser];
    setUsers(updatedUser);
    setName('');
  };
  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn btn-block">submit</button>
      </form>
      {/* render users */}
      <h2>users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => removeUser(user.id)}>remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallenge;
