import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink } from "react-router-hash-link";

import Button from "../UI/Button";

import rLogo from "../../img/r_logo.png";
import amlLogo from "../../img/ml_logo.png";

const About = () => {
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center">
          <h2 className="heading h2 text-white">About</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <hr className="white" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <p className="text-grey">
            StockPredict is online monitoring platform based on the complex
            technical analysis of the market data. The data are processed and
            transformed by R scripts, then technical indicators optimized for
            the specific stock generate movement signals. The signals are sent
            to and utilized by Microsoft Azure Machine Learning Studio
            algorithms and based on the output the predictions for a next 3, 7,
            14 a 30 days are made.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="service-box">
          <img src={rLogo} alt="R Logo" />
          <h3 className="heading h3 text-white">R Studio</h3>
        </Col>
        <Col className="service-box">
          <img src={amlLogo} alt="Azure Machine Learning Studio Logo" />
          <h3 className="heading h3 text-white">
            Microsoft Azure Machine Learning Studio
          </h3>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <HashLink to="/#indicators">
            <Button
              as="div"
              variant="primary"
              type="button"
              size="xl"
              textColor="black"
              backgroundColor="white"
              backgroundColorHover="#f2f2f2"
            >
              Explore our indicators
            </Button>
          </HashLink>
        </Col>
      </Row>
    </>
  );
};

export default About;
