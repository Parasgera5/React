import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/styles.css"

export default function Navbar(props) {
  {
    /* props can not be changed they are always read only. */
  }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }
      style={{ backgroundColor: props.themeColor }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                {props.aboutText}
              </Link>
              {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
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

          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable dark mode
            </label>
          </div>
          <div className="themes">
            <button className="btn btn-outline-success rounded-circle mx-2 co1" type="submit" style={{width:"35px", height:"35px"}} onClick={() => props.onColorSelect("red")}></button>
            <button className="btn btn-outline-success rounded-circle mx-2 co2" type="submit" style={{width:"35px", height:"35px"}} onClick={() => props.onColorSelect("blue")}></button>
            <button className="btn btn-outline-success rounded-circle mx-2 co3" type="submit" style={{width:"35px", height:"35px"}} onClick={() => props.onColorSelect("green")}></button>
            <button className="btn btn-outline-success rounded-circle mx-2 co4" type="submit" style={{width:"35px", height:"35px"}} onClick={() => props.onColorSelect("orange")}></button>
            <button className="btn btn-outline-success rounded-circle mx-2 co5" type="submit" style={{width:"35px", height:"35px"}} onClick={() => props.onColorSelect("white")}></button>
            

          </div>
        </div>
      </div>
    </nav>
  );
}

// proptypes
Navbar.propTypes = {
  // ye kya karega ki if we send anything instead of string from the props we will got an error so this is the check for that -> title="TextUtils" aboutText="About TextUtils" for this it is the check if something like title={3}" is sended we got an error
  // title: PropTypes.string,
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// default props
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Set about here",
};
