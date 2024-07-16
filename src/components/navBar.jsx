import { Link } from "react-router-dom";
import { useState } from "react";
import personPicture from "/assets/img/avatars/1.png";

export default function NavBar(props) {
  const { title } = props;
  // eslint-disable-next-line no-unused-vars
  const [profilePicture, setProfilePicture] = useState(personPicture);

  return (
    <nav
      id="layout-navbar"
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4">
          <i className="bx bx-menu bx-sm"></i>
        </a>
      </div>

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <h4 className="my-0 fw-semibold">{title}</h4>
          </div>
        </div>

        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a
              className="nav-link dropdown-toggle hide-arrow"
              data-bs-toggle="dropdown"
            >
              <div className="avatar avatar-online">
                <img
                  src={profilePicture}
                  alt=""
                  className="w-px-40 h-auto rounded-circle"
                />
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link to="/profile" className="dropdown-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                        <img
                          src={profilePicture}
                          alt=""
                          className="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-semibold d-block">John Doe</span>
                      <small className="text-muted">Officer</small>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <Link to="/profile" className="dropdown-item">
                  <i className="bx bx-user me-2"></i>
                  <span className="align-middle">My Profile</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="dropdown-item text-danger">
                  <i className="bx bx-power-off me-2"></i>
                  <span className="align-middle">Log Out</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
