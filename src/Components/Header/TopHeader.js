import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TopHeader = () => {
  return (
    <>
      <div className="topbar position-relative">
        <div className="topbarContent row container">
          <div className="col-md-8">
            <ul className="mb-0 ps-0">
              <li>
                <a
                  href="mailto:webomtech74@gmail.com"
                  className="d-flex align-items-center"
                >
                  <EmailIcon />
                  support@webomtechnologies.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:webomtech74@gmail.com"
                  className="d-flex align-items-center"
                >
                  <LocationOnIcon />
                  115 Hillcrest Avenue, Missisauga, Ontario, L5B 3Y9
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="support">
              <a href="">Help</a> / <a href="">Support</a> /{" "}
              <a href="">Contact</a>
            </div>
          </div>
        </div>
        <ul className="mb-0 social">
          <li>
            <a href="" className="social-link">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="" className="social-link">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="" className="social-link">
              <XIcon />
            </a>
          </li>
          <li>
            <a href="" className="social-link">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopHeader;
