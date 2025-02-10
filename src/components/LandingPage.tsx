import { Col, Container, Row } from "react-bootstrap";
import { TbMapSearch } from "react-icons/tb";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Lottie from "lottie-react";
import worldlanding from "@assets/LottieFiles/worldlanding.json";
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Container fluid>
        <Row>
          <Col md={6} xs={12} className="flights-card Text-card">
            <div className="content">
              <div className="header">Best Experiences In Cairo for free</div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quo commodi perspiciatis voluptas debitis fuga asperiores
                voluptatum vero quas minima velit perferendis impedit ratione
                quaerat, eos, reiciendis repudiandae aspernatur mollitia.
              </div>
              <div className="stars d-flex mt-4 align-items-center">
                {Array(5)
                  .fill(1)
                  .map((_, idx) => {
                    return (
                      <MdOutlineStarPurple500
                        style={{ color: "#ead400", fontSize: "22px" }}
                        key={idx}
                      />
                    );
                  })}{" "}
                <div
                  style={{
                    marginLeft: "5px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  210k{" "}
                  <span
                    style={{ textDecoration: "underline", marginLeft: "2px" }}
                  >
                    Good Reviews
                  </span>
                </div>
              </div>
              <a href="#search-bar" className="howWork">
                Start Search <TbMapSearch />
              </a>
            </div>
          </Col>
          <Col md={6} xs={12} className="flights-card image-card">
            <Lottie animationData={worldlanding} />
            <div className="locations">
              <div className="l-1">
                <div className="lable">Location</div>
                <div className="name">Cairo , Egypt</div>
              </div>
              <div className="d-flex justify-content-between btm-loc">
                <div className="l-1">
                  <div className="lable">Distance</div>
                  <div className="name">137.28 ml</div>
                </div>
                <div className="l-1">
                  <div className="lable">Elevation</div>
                  <div className="name">2.040 km</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
