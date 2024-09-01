import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-overlay"></div>
        <div className="customContainer footerBanner m-auto">
          <div className="footerSections">
            <div className="frontFooter">
              <img src="../assets/svg/logo-foot.svg" />
              <p>
                Desires to obtain pain of itself, because it is pain, but
                occasionally circumstances.
              </p>
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
            <div className="secFoot">
              <h4>Explore</h4>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Meet the Team</a>
                </li>
                <li>
                  <a href="">News & Media</a>
                </li>
                <li>
                  <a href="">Our Projects</a>
                </li>
              </ul>
            </div>
            <div className="secFoot">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:webomtech74@gmail.com" className="d-flex">
                    <LocationOnIcon />
                    115 Hillcrest Avenue, Missisauga, Ontario, L5B 3Y9
                  </a>
                </li>
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
                    <CallIcon />
                    +1 (647) 525-2043
                  </a>
                </li>
              </ul>
            </div>
            <div className="secFoot">
              <h4>Gallery</h4>
              <div className="galleryPics">
                <img src="../assets/images/galleryOne.jpg" />
                <img src="../assets/images/galleryTwo.jpg" />
                <img src="../assets/images/galleryThree.jpg" />
                <img src="../assets/images/galleryFour.jpg" />
                <img src="../assets/images/galleryFive.jpg" />
                <img src="../assets/images/gallerySix.jpg" />
              </div>
            </div>
          </div>
          <div className="footerBar position-relative text-center mt-4">© Copyright 2024 by webomtech.com</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
