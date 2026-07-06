import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NEWSAPP{" "}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div>
                  <Link
                    className="nav-Link active"
                    aria-current="page"
                    style={{
                      color: "white",
                      marginRight: 20,
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    Home
                  </Link>{" "}
                  <Link
                    className="nav-Link"
                    style={{
                      color: "white",
                      marginRight: 20,
                      textDecoration: "none",
                    }}
                    to="/Business"
                  >
                    Business
                  </Link>{" "}
                  <Link
                    className="nav-Link"
                    style={{
                      color: "white",
                      marginRight: 20,
                      textDecoration: "none",
                    }}
                    to="/Entertainment"
                  >
                    Entertainment
                  </Link>{" "}
                  <Link
                    className="nav-Link"
                    style={{
                      color: "white",
                      marginRight: 20,
                      textDecoration: "none",
                    }}
                    to="/General"
                  >
                    General
                  </Link>{" "}
                  <Link
                    className="nav-Link"
                    style={{
                      color: "white",
                      marginRight: 20,
                      textDecoration: "none",
                    }}
                    to="/Health"
                  >
                    Health
                  </Link>{" "}
                  <Link
                    className="nav-Link"
                    style={{
                      color: "white",
                      marginRight: 20,
                      textDecoration: "none",
                    }}
                    to="/Science"
                  >
                    Science
                  </Link>{" "}
                  <Link
                    className="nav-Link"
                    style={{
                      color: "white",
                      marginRight: 20,
                      textDecoration: "none",
                    }}
                    to="/Sports"
                  >
                    Sports
                  </Link>{" "}
                  <Link
                    className="nav-Link"
                    style={{
                      color: "white",
                      marginRight: 20,
                      textDecoration: "none",
                    }}
                    to="/Technology"
                  >
                    Technology
                  </Link>
                </div>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
