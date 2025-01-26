import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
            {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
            {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
            <h1 className="sitename">TastyBites</h1>
            <span>.</span>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link to="/">
                  Home
                  <br />
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/event">Events</Link>
              </li>
              <li>
                <Link to="/chefs">Chefs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            {/* trigger modal */}
            <button
              className="btn d-xl-none d-sm-block d-md-block"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </nav>

          <Link className="btn-getstarted " to="/booktable">
            Book Table
          </Link>
        </div>
      </header>

      <div className="collapse" id="collapseExample">
        <div className="card card-body w-100">
          <ul
            style={{
              listStyle: "none",
              lineHeight: "30px",
              margin: "0",
              padding: "0",
              fontSize: "12px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/event">Events</Link>
            </li>
            <li>
              <Link to="/chefs">Chefs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
