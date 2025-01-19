import { ExperienceKeys } from "@constants/constants";
import { Col, Container, Row } from "react-bootstrap";

const Experience = () => {
  return (
    <div className="Experience">
      <Container>
        <div className="head">Best Experiences In Cairo for free</div>
        <div className="info">
          Join over 1 Million of users. Dignissimos asperiores vitae velit
          veniam totam fuga molestias accusamus alias autem provident. Odit ab
          aliquam dolor eius.
        </div>
        <Row>
          {ExperienceKeys.map((item, index) => (
            <Col key={index} md={4} xs={12} className="Plan-Card">
              <div className="icon">{item.icon}</div>
              <div className="details">
                <div className="header">{item.title}</div>
                <div className="desc">{item.description}</div>
                <div className="more">{item.linkText}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
