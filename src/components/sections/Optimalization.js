import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Plotly from "plotly.js-basic-dist-min";
import createPlotlyComponent from "react-plotly.js/factory";
import Nav from "react-bootstrap/Nav";
import { HashLink } from "react-router-hash-link";

import Button from "../UI/Button";

const Plot = createPlotlyComponent(Plotly);

const Optimalization = (props) => {
  const [selectedBestTimePeriod, setSelectedBestTimePeriod] = useState("AAPL");
  const [
    selectedBestAlgorithmsAndTendencies,
    setSelectedBestAlgorithmsAndTendencies,
  ] = useState("AAPL");

  let content = props.data ? (
    <>
      <Row>
        <Col>
          <Plot
            data={props.data.optimalization.silentRowsPlot.data}
            layout={props.data.optimalization.silentRowsPlot.layout}
            useResizeHandler
            className="w-full"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-white">
            Next important thing was to decide on how many years of daily
            props.data apply to the optimized parameters and train
            classification algorithms in Microsoft Azure Machine Learning
            Studio. We observed accuracy of the models on 1,2,3,4,5 and 10-years
            data for a 3 different companies(Apple,Bank of America and Intel).
            We can see the results on chart down below. They are pretty straight
            forward - the models have the best accuracy on one-year data. The
            possible reason is that every one of our 9 indicators give only 3
            classes of the singnals(rise/fall/silent) which can lead to
            overfitting and also most recent data are more appropriate for the
            predictions.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav variant="tabs" defaultActiveKey="Apple">
            <Nav.Item>
              <Nav.Link
                eventKey="Apple"
                onClick={() => setSelectedBestTimePeriod("AAPL")}
              >
                Apple
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="BankOfAmerica"
                onClick={() => setSelectedBestTimePeriod("BAC")}
              >
                Bank Of America
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="Intel"
                onClick={() => setSelectedBestTimePeriod("INTC")}
              >
                Intel
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Plot
            data={
              props.data.optimalization[
                "bestTimePeriod" + selectedBestTimePeriod
              ].data
            }
            layout={
              props.data.optimalization[
                "bestTimePeriod" + selectedBestTimePeriod
              ].layout
            }
            useResizeHandler
            className="w-full"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-white">
            Finally we tested which prediction periods(1,3,7,14,30 days) have
            acceptable accuracy. As you can see on the charts below making
            prediction for a next day is not very accurate. Platform is making
            the predictions for 3 days tendency every third day and predictions
            for 7 days tendency every 7th day and for 14 a 30 days tendency
            every 14th day. Every company uses its best accuracy classification
            algorithms for every prediction period. For example Bank of America
            uses Support Vector Machine algorithm for a 14 days tendency period
            with tested success rate of 87.5%.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav variant="tabs" defaultActiveKey="Apple">
            <Nav.Item>
              <Nav.Link
                eventKey="Apple"
                onClick={() => setSelectedBestAlgorithmsAndTendencies("AAPL")}
              >
                Apple
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="BankOfAmerica"
                onClick={() => setSelectedBestAlgorithmsAndTendencies("BAC")}
              >
                Bank Of America
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="Intel"
                onClick={() => setSelectedBestAlgorithmsAndTendencies("INTC")}
              >
                Intel
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Plot
            data={
              props.data.optimalization[
                "bestAlgorithmsAndTendencies" +
                  selectedBestAlgorithmsAndTendencies
              ].data
            }
            layout={
              props.data.optimalization[
                "bestAlgorithmsAndTendencies" +
                  selectedBestAlgorithmsAndTendencies
              ].layout
            }
            useResizeHandler
            className="w-full"
          />
        </Col>
      </Row>
    </>
  ) : (
    ""
  );

  if (props.error) {
    content = (
      <>
        <h4 style={{ color: "red" }}>
          Sorry. Loading of optimalization data for charts failed.
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
        <Col className="d-flex justify-content-center">
          <h2 className="heading h2 text-white">Optimalization process</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-white">
            Every one of our nine technical indicators explore the market data
            and if it recognies a pattern, which is significant enough for a
            price to rise or fall, then indicator gives a two class signal(rise
            or fall). The main thing in the optimalization process was to get
            the most accurate signals from the indicators and at the same time
            have enough signals to make the predictions. The signals generated
            from each indicator depend on the parameters passed to the
            indicator. We started optimalization of the parameters on 5-years
            historical daily prices to ensure enough data to find optimal
            parameters, which are also general enough for future predictions. We
            found out two or one year data are simply sufficient to find
            parameters general enough.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-white">
            In case some indicator doesn't see any pattern in the current data
            it gives the signal "silent". So the next step was to be sure, we
            have enough signals in every row to generate some kind of signal
            from the machine learining. We generated the signals on ten year
            data with the use of the optimized parameters and expolered how many
            times there is low number of the signals. The next chart shows that
            on 10-years data there was no single day when all of our indicators
            gave signal silent and for example roughly one day out of one
            hundred less than three indicators gave us rise/fall singnal, so we
            can conclude we have always some singnals:
          </p>
        </Col>
      </Row>
      {content}
      <Row>
        <Col className="d-flex justify-content-center">
          <HashLink to="/#predictions">
            <Button
              as="div"
              variant="primary"
              type="button"
              size="xl"
              textColor="black"
              backgroundColor="white"
              backgroundColorHover="#f2f2f2"
            >
              Show Current Predictions!
            </Button>
          </HashLink>
        </Col>
      </Row>
    </>
  );
};

export default Optimalization;
