import React from 'react';
import { Link } from "react-router-dom";

function Header() {

  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="navbar-brand">Project Earth</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapser" aria-controls="navbarCollapser" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapser">
        <ul className="nav nav-tabs">
          <li className="nav-item">
           <Link to="/">Challenges</Link>
          </li>
          <li className="nav-item">
            <Link to="/AddChallenge">Add a Challenge</Link>
          </li>
          <li className="nav-item">
            <Link to="/SignUp">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link to="/LogIn">Log In</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;