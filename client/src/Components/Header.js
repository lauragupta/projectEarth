import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import auth from '../utils/auth';

function Header() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    const isLoggedIn = auth.isLoggedIn();
    setisLoggedIn(isLoggedIn);
  }, []);
  function handleLogOut(e) {
    auth.logout();
    setisLoggedIn(false);
  }
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
            <Link to="/addchallenge">Add a Challenge</Link>
          </li>
          {!isLoggedIn && <li className="nav-item">
            <Link to="/signup">Sign Up</Link>
          </li>}
          {!isLoggedIn && <li className="nav-item">
            <Link to="/login">Log In</Link>
          </li>}
          {isLoggedIn && <li className="nav-item">
            <button onClick={handleLogOut}>Log Out</button>
          </li>}
          {/* <li className="nav-item">
            <Link to="/about">About</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;