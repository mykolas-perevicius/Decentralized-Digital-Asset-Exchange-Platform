import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
      <div className="navbar">
          <div className="logo">DDAEP</div>
          <input type="text" placeholder="Search for CS2 items" className="search-box"/>
          <button className="sign-in">SIGN IN</button>
          <button className="sign-up">SIGN UP</button>
      </div>
  );
}
export default NavBar;
