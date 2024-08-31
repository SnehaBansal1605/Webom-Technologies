import React from "react";
import "./Home.css";
import Button from "../../Components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  return (
    <>
      <section className="first-section">
        <div className="row customContainer align-items-center heroBanner">
          <div className="col-md-7">
            <div className="heroContent">
              <div className="tagline mb-2">BEST IT SOLUTION EVER</div>
              <h1 className="heroTag mb-5">
                Transforming Ideas into Powerful Digital Solutions!
              </h1>
              <Button>DISCOVER MORE</Button>
            </div>
          </div>
          <div className="col-md-5">
            <img
              alt="Hero"
              className="heroImage"
              src="../assets/images/heroImg.png"
            />
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="row customContainer align-items-center heroBanner">
          <div className="col-md-6">
            <div className="secondSecImage position-relative">
              <img
                className="secondBack"
                alt="Second Part"
                src="../assets/images/secondPart.png"
              />
              <img
                className="secondPhoto"
                alt="Second Part"
                src="../assets/images/secondImage.jpg"
              />
              <div className="secLayer"></div>
              <div className="exLayer">
                <h1>5</h1>
                <p className="mb-0">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6 className="subtitle">Welcome to WebOm Technologies</h6>
            <h2 className="title">Best IT Technology Services you can Trust</h2>
            <p className="detail mt-4">
              At <span className="highlighted">WebOm Technologies</span>, we are
              more than just an IT solutions provider – we are a dedicated
              partner committed to your success. With years of experience and a
              passion for innovation, we help businesses of all sizes harness
              the power of technology to drive growth, improve efficiency, and
              secure their future.
            </p>
            <div className="twoSecings">
              <div className="secing">
                <div className="d-flex align-items-center">
                  <div className="direct">
                    <ArrowForwardIcon />
                  </div>
                  <h5 className="mb-0">Website Development</h5>
                </div>
                <p>
                  We craft high-performance, visually stunning websites that
                  drive engagement and deliver results.
                </p>
              </div>
              <div className="secing">
                <div className="d-flex align-items-center">
                  <div className="direct">
                    <ArrowForwardIcon />
                  </div>
                  <h5 className="mb-0">Website Designing</h5>
                </div>
                <p>
                  We specialize in creating visually captivating, user-centric
                  website designs that make a lasting impression.
                </p>
              </div>
            </div>
            <Button>DISCOVER MORE</Button>
          </div>
        </div>
      </section>
      <section className="third-section">
        <div className="customContainer heroBanner text-center">
          <h6 className="subtitle">Services We Offer</h6>
          <h2 className="title">High Quality Services that we Stand behind</h2>
          <div className="services">
            <div className="card-service">
              <img
                alt="Website Development"
                src="../assets/svg/web-development.svg"
              />
              <h2>Web Development</h2>
            </div>
            <div className="card-service">
              <img alt="Website Development" src="../assets/svg/cloud.svg" />
              <h2>Cloud Hosting</h2>
            </div>
            <div className="card-service">
              <img alt="Website Development" src="../assets/svg/mobile.svg" />
              <h2>Mobile App Development</h2>
            </div>
            <div className="card-service">
              <img
                alt="Website Development"
                src="../assets/svg/website-layout.svg"
              />
              <h2>UI/UX Design</h2>
            </div>
            <div className="card-service">
              <img alt="Website Development" src="../assets/svg/seo.svg" />
              <h2>Search Engine Optimization</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
