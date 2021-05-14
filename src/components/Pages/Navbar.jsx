import React from "react";
import { Link } from "react-router-dom";
import fire from "../../config/fire";
import avatar from "../assets/avatar.png";

export const Navbar = () => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ background: "linear-gradient(90deg, rgba(56,45,255,1) 0%, rgba(67,67,255,1) 11%, rgba(0,212,255,1) 100%)" }}
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
                <Link className="nav-link" to="/presc">
                  Report
                </Link>
              </li>
            </ul>

            <button
              type="button"
              className="btn btn-warning"
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
