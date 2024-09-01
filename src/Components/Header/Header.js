import React from "react";
import "./Header.css";
import TopHeader from "./TopHeader";
import CallIcon from "@mui/icons-material/Call";
import Button from "../Button/Button";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="headerSections">
          <TopHeader />
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img className="logoHead" src="../assets/svg/logo-head.svg" />
              </a>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="d-flex">
                  <div className="d-flex align-items-center callSupport">
                    <div className="call">
                      <CallIcon />
                    </div>
                    <div>
                      <p>Call Anytime</p>
                      <h6 className="mb-0">+1 (647) 525-2043</h6>
                    </div>
                  </div>
                  <Button className="contactNow">REQUEST A QUOTE</Button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
