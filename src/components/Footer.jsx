import { Container, Row, Col } from "react-bootstrap";

import youtubeIcon from "/img/svg/yt-icon.svg";
import instagramIcon from "/img/svg/insta-icon.svg";
import linkedinIcon from "/img/svg/link-icon.svg";

import { FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-light py-5" id="footer">
      <Container>
        <div data-aos="fade-right">
          <h5 className="mb-5" style={{ color: "#6c67e0" }}>
            Contact Us
          </h5>
        </div>
        <Row className="mb-4">
          <Col md={4} className="text-center text-md-start">
            <h2 className="font-weight-bold text-start">Let&apos;s Talk</h2>
            <div className="social-icons mt-3 mb-3 d-flex flex-column gap-2">
              <a href="#" className="text-light mx-2 d-flex align-items-center">
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                <span>YouTube</span>
              </a>
              <a href="#" className="text-light mx-2 d-flex align-items-center">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                <span>Instagram</span>
              </a>
              <a href="#" className="text-light mx-2 d-flex align-items-center">
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                <span>LinkedIn</span>
              </a>
            </div>
          </Col>
          <Col md={4} className="text-start text-md-start d-none d-md-block">
            <h5 className="">Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Our Works
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-start text-md-start">
            <h5 className="">Contact Information</h5>
            <ul className="list-unstyled fs-6">
              <li className="d-flex align-items-center">
                <FaMobileAlt className="me-2" />
                +91 9876543210
              </li>
              <li className="d-flex align-items-center">
                <FaEnvelope className="me-2" /> support@madads.co.in
              </li>
              <li className="d-flex align-items-center">
                <FaLocationDot className="me-2" />
                347, Old Gst Road, East Tambaram, Chennai - 600059
              </li>
            </ul>
            <p className="mt-4">Providing Creative Ideas for Your Business</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6} className="text-center text-md-start">
            <p style={{ fontSize: "14px" }}>Copyright © 2024 MadAds</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p style={{ fontSize: "14px" }}>Powered by Madads</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
