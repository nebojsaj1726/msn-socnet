import React from "react";
import { Link } from "react-router-dom";

const NavbarLanding = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-trans my-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          msn
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profiles">
                {" "}
                People
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLanding;
