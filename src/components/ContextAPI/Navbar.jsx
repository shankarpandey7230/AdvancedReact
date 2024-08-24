import React, { useState, createContext, useContext } from 'react';
import NavLinks from './NavLinks';

export const NavbarContext = createContext();

// custom hook

export const useAppContext = () => useContext(NavbarContext);
// console.log(NavbarContext);
const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ logout, user }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
