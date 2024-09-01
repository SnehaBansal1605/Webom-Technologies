import React, { useState } from "react";
import "./Home.css";
import Button from "../../Components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RequestQuoteForm from "../../Components/RequestQuote/RequestQuoteForm";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <section className="first-section">
        <div className="row customContainer align-items-center heroBanner m-auto">
          <div className="col-md-7 col-12">
            <div className="heroContent">
              <div className="tagline mb-2">BEST IT SOLUTION EVER</div>
              <h1 className="heroTag mb-md-5 md-4">
                Transforming Ideas into Powerful Digital Solutions!
              </h1>
              <Button onClick={handleOpen}>GET A QUOTE</Button>
            </div>
          </div>
          <div className="col-md-5 col-12">
            <img
              alt="Hero"
              className="heroImage"
              src="../assets/images/heroImg.png"
            />
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="row customContainer align-items-center heroBanner m-auto">
          <div className="col-md-6 col-12">
            <div className="secondSecImage position-relative">
              <img
                className="secondBack"
                alt="Second Part"
                src="../assets/images/secRobot.png"
              />
              <div className="exLayer">
                <h1>5</h1>
                <p className="mb-0">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
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
        <div className="customContainer heroBanner text-center m-auto">
          <h6 className="subtitle">Services We Offer</h6>
          <h2 className="title">High Quality Services that we Stand behind</h2>
          <div className="services d-flex align-items-stretch justify-content-center flex-wrap">
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
              <img alt="Website Development" src="../assets/svg/rocket.svg" />
              <h2>Search Engine Optimization</h2>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center serviceLine py-5 flex-wrap">
            <h5>
              IT Technology services built specifically for your business.
            </h5>
            <Button className="contactNow">FIND YOUR SOLUTION</Button>
          </div>
        </div>
      </section>
      <section className="fourth-section">
        <div className="row customContainer align-items-center heroBanner m-auto">
          <div className="col-md-6 col-12">
            <div className="whyContent">
              <h6 className="subtitle">WHY CHOOSE US</h6>
              <h2 className="title">Why Choose Us?</h2>
              <p className="detail mt-3">
                We are committed to delivering innovative IT solutions tailored
                to your business needs. Here's why we're the best choice for
                your technology partner:
              </p>
              <ul className="whyChooseItems mt-4">
                <li>
                  <a href="" className="d-flex">
                    <div className="chosIcon">
                      <Diversity3Icon />
                    </div>
                    <div>
                      <h2>Expert Team Members</h2>
                      <p>
                        Our skilled developers deliver tailored IT solutions
                        across software development, cloud, cybersecurity, and
                        data analytics with a highly experienced team.
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" className="d-flex">
                    <div className="chosIcon">
                      <Diversity3Icon />
                    </div>
                    <div>
                      <h2>Cutting-Edge Technology</h2>
                      <p>
                        We use AI, machine learning, IoT, and advanced
                        technologies to provide innovative, future-proof
                        solutions.
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" className="d-flex">
                    <div className="chosIcon">
                      <Diversity3Icon />
                    </div>
                    <div>
                      <h2>24/7 Support</h2>
                      <p>
                        Our team provides round-the-clock technical support to
                        resolve issues quickly and minimize disruptions.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <img
              alt="Why Choose Us"
              className="heroImage"
              src="../assets/images/whyChoose.jpg"
            />
          </div>
        </div>
      </section>
      <section className="fifth-section">
        <div className="customContainer heroBanner text-center m-auto">
          <div className="questionSection text-center m-auto">
            <h6 className="subtitle">Our Faq's</h6>
            <h2 className="title">Have any Questions?</h2>
            <p className="detail mt-4">
              We provides quick answers to common inquiries about our IT
              services, security practices, support availability, and how we
              tailor solutions to meet your business needs.
            </p>
          </div>
          <div className="row m-auto">
            <div className="col-md-6 col-12">
              <div className="faqForm">
                <h4>Send Us Your Comments</h4>
                <p className="detail my-3">
                  Please call <strong>+1 (647) 525-2043</strong> if urgent.
                  We’ll ensure that you receive the best IT solution.
                </p>
                <div className="wholeForm my-4">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Write a Message"
                    multiline
                    rows={4}
                  />
                  <Button className="contactNow">SEND A MESSAGE</Button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="faqForm faqQuesForm">
                <img alt="Faq" src="../assets/images/faqImage.jpg" />
                <div className="mt-3">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      What IT services do you offer?
                    </AccordionSummary>
                    <AccordionDetails>
                      We offer a wide range of IT services including software
                      development, cloud computing, cybersecurity, data
                      analytics, IT consulting, managed services, and technical
                      support.
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      What industries do you serve?
                    </AccordionSummary>
                    <AccordionDetails>
                      We serve various industries, including healthcare,
                      finance, retail, education, manufacturing, and technology,
                      among others.
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      Do you provide ongoing support after project completion?
                    </AccordionSummary>
                    <AccordionDetails>
                      Absolutely. We offer continuous maintenance and support
                      services to ensure your systems stay updated, secure, and
                      performing optimally.
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      How do we get started with your services?
                    </AccordionSummary>
                    <AccordionDetails>
                      You can start by contacting us through our website or by
                      phone. We'll set up an initial consultation to discuss
                      your needs and provide you with a tailored proposal.
                    </AccordionDetails>
                    <AccordionActions>
                      <Button className="contactNow">CONTACT US</Button>
                    </AccordionActions>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="requestForm">
          <RequestQuoteForm />
          </div>
      </Modal>
    </>
  );
};

export default Home;
