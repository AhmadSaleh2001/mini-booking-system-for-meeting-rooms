import React from "react";
import { Link } from "react-router-dom";
import useMainContext from "../Hooks/useMainContext";
function Navbar() {
  let { User, SetUser } = useMainContext();
  // console.log(User);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Mini Booking System
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
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              {User != -1 && (
                <>
                  <li>
                    <Link className="nav-link" to={"/getMyRooms"}>
                      My Rooms
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to={"/BrowseRooms"}>
                      Browse Rooms
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div>
              {User == -1 && (
                <Link to={"/login"} className="btn btn-info text-white">
                  Login
                </Link>
              )}
              {User != -1 && (
                <Link
                  to={"/"}
                  className="btn btn-danger text-white"
                  onClick={() => SetUser(-1)}
                >
                  Logout
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
