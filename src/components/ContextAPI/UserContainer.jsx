import React from 'react';
import { NavbarContext, useAppContext } from './Navbar';

// console.log(value);
const UserContainer = () => {
  const { user, logout } = useAppContext(NavbarContext);
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>please login </p>
      )}
    </div>
  );
};

export default UserContainer;
