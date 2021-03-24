import React from "react";
import { Nav } from "react-bootstrap";

function Navbar() {
  return (
    <div>
      <Nav
        id="xNavbar"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <a className="navbar-brand" href="/">
          Xavier Guzman
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                About Me <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Portfolio">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </Nav>
    </div>
  );
}

export default Navbar;
