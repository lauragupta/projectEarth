import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import auth from '../utils/auth';
import "./Header.scss";


function Header(props) {

  let navigate = useNavigate();
  function handleLogOut(e) {
    auth.logout();
    props.setisLoggedIn(false);
    navigate(`/`)
  }
  return (
    <nav className=" container navbar navbar-expand-sm navbar-light">
      <div className="navbar-brand">Project Earth</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapser" aria-controls="navbarCollapser" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapser">
        <ul className="nav nav-tabs">
          <li className="nav-item">
           <Link to="/">Challenges</Link>
          </li>
          {props.isLoggedIn &&<li className="nav-item">
            <Link to="/addchallenge">Add a Challenge</Link>
          </li>}
          {!props.isLoggedIn && <li className="nav-item">
            <Link to="/signup">Sign Up</Link>
          </li>}
          {!props.isLoggedIn && <li className="nav-item">
            <Link to="/login">Log In</Link>
          </li>}
          {props.isLoggedIn && <li className="nav-item">
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