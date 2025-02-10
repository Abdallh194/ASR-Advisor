import { Col } from "react-bootstrap";
import { FaShare } from "react-icons/fa";

type CardProps = {
  header: string;
  link: string[];
};
const FooterCard = ({ header, link }: CardProps) => {
  return (
    <Col md={2} xs={12} className="footer-card">
      <div className="header">{header}</div>
      {link.map((e: string, idx) => {
        return (
          <div className="desc" key={idx}>
            <FaShare /> {e}
          </div>
        );
      })}
    </Col>
  );
};
export default FooterCard;
