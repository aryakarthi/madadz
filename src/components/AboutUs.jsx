import { Container, Row, Col } from "react-bootstrap";
import { aboutUsData } from "../data.js";

export const AboutUs = () => {
  return (
    <Container className="my-5 mt-5 position-relative">
      <div data-aos="fade-right">
        <span className="sno">04</span>
        <h2 className="section-title">Why Us?</h2>
      </div>

      {aboutUsData.map((section, index) => (
        <Row
          key={index}
          className={`align-items-center justify-content-center my-4 ${
            index % 2 === 1 ? "flex-row-reverse" : ""
          }`}
        >
          <Col md={5} className="d-flex justify-content-center">
            <div
              className="image-wrapper about-img"
              style={{
                overflow: "none",
                borderTopRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                border: "1px solid #870be7",
              }}
            >
              <img
                src={section.imgSrc}
                alt={section.title}
                className="img-fluid "
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
          </Col>
          <Col md={7} className="aboutus-content mt-4 mt-md-0">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default AboutUs;
