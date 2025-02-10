import { FooterCardData } from "@constants/constants";
import { Button } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import FooterCard from "./FooterCard";
import SocialsCard from "./SocialsCard";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col md={2} xs={12} className="footer-card">
            <div className="header">About Us</div>
            <div className="info">
              ASR TRAVEL connects the world to and through our global hub in
              Egypt. We operate modern, efficient and comfortable aircraft
            </div>
          </Col>
          {FooterCardData.map((item, idx) => (
            <FooterCard header={item.header} link={item.links} key={idx} />
          ))}

          <hr />
          <Col
            md={4}
            xs={12}
            className="footer-card d-flex width-100-mobileView d-flex-mobileView"
          >
            <input
              type="text"
              className="form-control"
              placeholder="Your Email.............."
            />
            <Button className="submit">Submit</Button>
          </Col>
          <Col
            md={4}
            xs={12}
            className="footer-card d-flex justify-content-center width-100-mobileView"
          >
            <div className="dis-Block-MobileVIEW">
              <div className="down-Section">
                <span>Downlod From</span>
                <div className="head">
                  App Store <FaApple fontSize="large" className="icon" />
                </div>
              </div>
              <div className="down-Section">
                <span>Downlod From</span>
                <div className="head">
                  Google Play {"  "}
                  <FaGooglePlay className="icon" />
                </div>
              </div>
            </div>
          </Col>
          <Col
            md={4}
            xs={12}
            className="footer-card d-flex width-100-mobileView"
          >
            <SocialsCard />
          </Col>
          <div className="Policy">
            For more details on how we use your information, please see our
            Privacy Policy
          </div>
          <hr />
          <div className="copyRight">
            <div className="copy">
              ASR TRAVEL {new Date().getFullYear()} ©, all rights reserved .
            </div>
            <div className="uther">
              It was designed and implemented by{" "}
              <a
                href="https://abdallh-rakha.vercel.app/"
                target="_blank"
                style={{ color: "white" }}
              >
                Abdullah Sabry
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
