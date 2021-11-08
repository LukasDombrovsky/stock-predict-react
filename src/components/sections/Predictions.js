import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "../UI/Button";

import buy from "../../img/buy.png";
import sell from "../../img/sell.png";
import Wifi from "../UI/Wifi";

let predictionRate;

const Predictions = (props) => {
  const [selectedPrediction, setSelectedPrediction] = useState("Apple");

  if (props.data) {
    predictionRate = props.data.predictions.rates.filter((rate) => {
      return rate.name === selectedPrediction;
    })[0];
  }

  let content = "";

  if (props.data) {
    content = (
      <Container>
        <Row>
          <h4 className="heading left">{predictionRate.title}</h4>
          {predictionRate.prediction.map((data, index) => (
            <Col key={index}>
              <div className="service-box">
                <p className="no-margin text-black">{data.period}</p>
                <p className="no-margin text-muted">
                  From {props.data.predictions.dates[data.period].startDate}
                </p>
                <p className="no-margin text-muted">
                  From {props.data.predictions.dates[data.period].endDate}
                </p>
                <img
                  src={data.signal === "rise" ? buy : sell}
                  alt="Prediction info graphics"
                />
                <p className="no-margin text-black">
                  Strength: {Math.trunc(data.accuracy * 100)}%
                </p>
                <Wifi accuracy={data.accuracy} signal={data.signal} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  if (props.error) {
    content = (
      <>
        <h4 style={{ color: "red" }}>
          Sorry. Loading of prediction data for charts failed.
        </h4>
        <Button
          as="div"
          variant="primary"
          type="button"
          size="xl"
          onClick={props.getData}
          backgroundColor="#d91616"
          backgroundColorHover="#ee4b28"
        >
          Try to download data again
        </Button>
      </>
    );
  }

  if (props.isLoading) {
    content = "Loading data...";
  }

  return (
    <>
      <Row>
        <Col>
          <h2 className="heading h2">Predictions</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <hr />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <p className="text text-black">
            Here are our live predictions! Choose the desired company on tabs
            and explore our predictions! Every company has forecasted tendencies
            for 3,7,14 and 30 days tendency. Every forecast has the dates, the
            prediction graphics: green BULL = rise and red BEAR = fall and
            strength of that forecast.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="box-shadow no-padding">
          <Nav variant="tabs" defaultActiveKey="Apple">
            <Nav.Item>
              <Nav.Link
                eventKey="Apple"
                onClick={() => setSelectedPrediction("Apple")}
              >
                Apple
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="BankOfAmerica"
                onClick={() => setSelectedPrediction("BankOfAmerica")}
              >
                Bank Of America
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="Intel"
                onClick={() => setSelectedPrediction("Intel")}
              >
                Intel
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {content}
        </Col>
      </Row>
    </>
  );
};

export default Predictions;
