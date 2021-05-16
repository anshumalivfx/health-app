import React from "react";
import { Link, NavLink } from "react-router-dom";
import fire from "../../config/fire";
import { NavDropdown } from "react-bootstrap";
import "tachyons";

export const Navbar = () => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          background:
            " linear-gradient(90deg, rgba(51,81,237,1) 0%, rgba(0,33,203,1) 52%, rgba(27,26,235,1) 100%)",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Health
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
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/presc">
                  Prescription
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/report">
                  Report
                </Link>
              </li>
            </ul>
            <NavDropdown
              title={
                <span
                  className=" link ph3 pv2 mb2 grow hover-bg-yellow black bg-animate"
                  style={{ color: "#fff" }}
                >
                  {fire.auth().currentUser.displayName ||
                    fire.auth().currentUser.email}
                </span>
              }
              id="basic-nav-dropdown"
            >
              
                <NavLink
                  className="no-underline"
                  style={{ color: "#000", padding: 13 }}
                  to="/profile"
                >
                  My Profile
                </NavLink>
              
              <NavDropdown.Item
                type="button"
                className="btn btn-warning"
                onClick={() => logout()}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </nav>
    </div>
  );
};
