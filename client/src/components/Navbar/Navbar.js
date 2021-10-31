import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
   
      <nav className="Navbar-items">
        <h2 className="logo">JiggyFlex</h2>
        <div className="search">
          <input className="nav-search" placeHolder="Find a place to cruise" />
          <input className="nav-search" placeHolder="Enter location" />
          <button className="nav-find-btn">Find</button>
        </div>
        <nav className="signup-items">
          <p className="sign-up">Sign up</p>
          <p className="log-in">Log in</p>
        </nav>
      </nav>
  );
};

export default Navbar;
