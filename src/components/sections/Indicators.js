import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink } from "react-router-hash-link";

import Button from "../UI/Button";

import adlLogo from "../../img/indicators/ADL_logo.png";
import rocLogo from "../../img/indicators/ROC_logo.png";
import stochRSILogo from "../../img/indicators/stochRSI_logo.png";
import trixLogo from "../../img/indicators/TRIX_logo.png";

const Indicators = () => {
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center">
          <h2 className="heading h2">Technical indicators</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={adlLogo} alt="ADL Logo" />
          <h3 className="heading h3">ADL</h3>
          <p className="text-muted">
            Accumulation/Distribution Line combines price and volume to show how
            money may be flowing into or out of a stock.
          </p>
        </Col>
        <Col>
          <img src={trixLogo} alt="ADX Logo" />
          <h3 className="heading h3">ADX</h3>
          <p className="text-muted">
            Average Directional Index shows whether a stock is trending or
            oscillating.
          </p>
        </Col>
        <Col>
          <img src={rocLogo} alt="AROON Logo" />
          <h3 className="heading h3">AROON</h3>
          <p className="text-muted">
            Aroon oscillator measures the difference between Aroon Up and Aroon
            Down.
          </p>
        </Col>
        <Col>
          <img src={stochRSILogo} alt="Stochastic RSI Logo" />
          <h3 className="heading h3">StochRSI</h3>
          <p className="text-muted">
            StochRSI combines stochastics with the Relative Strength Index
            indicator(RSI) to help you see RSI changes more clearly.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={rocLogo} alt="SAR Logo" />
          <h3 className="heading h3">SAR</h3>
          <p className="text-muted">
            Parabolic Stop and Reverse is a chart overlay that shows reversal
            points below prices in an uptrend and above prices in a downtrend.
          </p>
        </Col>
        <Col>
          <img src={stochRSILogo} alt="Force Index Logo" />
          <h3 className="heading h3">Force Index</h3>
          <p className="text-muted">
            Force Index is a simple price-and-volume oscillator.
          </p>
        </Col>
        <Col>
          <img src={adlLogo} alt="ROC Logo" />
          <h3 className="heading h3">ROC</h3>
          <p className="text-muted">
            Rate of Change shows the speed at which a stock's price is changing.
          </p>
        </Col>
        <Col>
          <img src={trixLogo} alt="TRIX Logo" />
          <h3 className="heading h3">TRIX</h3>
          <p className="text-muted">
            TRIX is a triple-smoothed moving average of price movements.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <HashLink to="/#algorithms">
            <Button
              as="div"
              variant="primary"
              type="button"
              size="xl"
              backgroundColor="#d91616"
              backgroundColorHover="#ee4b28"
            >
              Explore our classification algorithms
            </Button>
          </HashLink>
        </Col>
      </Row>
    </>
  );
};

export default Indicators;
