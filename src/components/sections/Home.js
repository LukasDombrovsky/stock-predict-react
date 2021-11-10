import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "../UI/Button";
import SectionWithBgImage from "../UI/SectionWithBgImage";
import classes from "./Home.module.scss";

import bgImage from "../../img/cover.jpg";

const Home = () => {
  return (
    <SectionWithBgImage bgImage={bgImage} className={classes.home}>
      <Container className={`${classes["mg-top-4"]} container-1000`}>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1 className={`heading text-white ${classes.headline}`}>
              THE STOCK MARKET CLOUD MONITORING PLATFORM
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <p className={`text-grey ${classes.p}`}>
              StockPredict can help you make better trading decisions! Just look
              on our forecast, no strings attached!
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            {/* <HashLink to="/#about"> */}
            <Button
              type="button"
              href="#about"
              backgroundColor="#d91616"
              backgroundColorHover="#ee4b28"
            >
              Find out more
            </Button>
            {/* </HashLink> */}
          </Col>
        </Row>
      </Container>
    </SectionWithBgImage>
  );
};

export default Home;
