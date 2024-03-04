import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React Demo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link" aria-current="page" href="/">
                Components Demo
              </a> */}
              <Link className="nav-link" to="/">
                Components Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/events">
                Events Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lists">
                Lists Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/props">
                Props Demo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
