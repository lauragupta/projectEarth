import React from 'react';
import NavBar from './NavBar';

function Header(props) {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="navbar-brand">Project Earth</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapser" aria-controls="navbarCollapser" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapser">
           {/* <NavBar currentPage={props.currentPage} handlePageChange={props.handlePageChange} /> */}
      </div>
    </nav>
  );
}

export default Header;