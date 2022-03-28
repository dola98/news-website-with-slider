import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isEnglish, setEnglish] = useContext(LanguageContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home 
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
              <Link to="/addNews" className="nav-link" aria-current="page">
                {isEnglish ? "Add News" : "খবর যোগ করুন"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                {isEnglish ? "Admin" : "অ্যাডমিন"}
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#d"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="login">
                    Login
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#d">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#d">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="d">
                Disabled
              </a>
            </li> */}
          </ul>
          <form className="d-flex">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            {/* <button className="btn btn-outline-success mr-2" type="submit">
              Search
            </button> */}
            <button
              className="btn btn-outline-success ml-2"
              type="button"
              onClick={() => setEnglish(!isEnglish)}
            >
              {isEnglish ? "বাংলা" : "English"}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
