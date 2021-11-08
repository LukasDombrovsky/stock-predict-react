import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Thumbnail from "./Thumbnail";
import AlgorithmInfo from "./AlgorithmInfo";

import thumbnail1 from "../../../img/ml/thumbnails/1.jpg";
import thumbnail2 from "../../../img/ml/thumbnails/2.jpg";
import thumbnail3 from "../../../img/ml/thumbnails/3.jpg";
import thumbnail4 from "../../../img/ml/thumbnails/4.jpg";
import thumbnail5 from "../../../img/ml/thumbnails/5.jpg";
import thumbnail6 from "../../../img/ml/thumbnails/6.jpg";

import infoGraphics1 from "../../../img/ml/fullsize/1.png";
import infoGraphics2 from "../../../img/ml/fullsize/2.png";
import infoGraphics3 from "../../../img/ml/fullsize/3.png";
import infoGraphics4 from "../../../img/ml/fullsize/4.png";
import infoGraphics5 from "../../../img/ml/fullsize/5.png";
import infoGraphics6 from "../../../img/ml/fullsize/6.png";

const thumbnails = [
  {
    image: thumbnail1,
    name: "Two-Class Boosted Decision Tree",
    description: "Accurate, fast training, large memory footprint",
    infoGraphics: infoGraphics1,
  },
  {
    image: thumbnail2,
    name: "Two-Class Averaged Perceptron",
    description: "Accurate, fast training, large memory footprint",
    infoGraphics: infoGraphics2,
  },
  {
    image: thumbnail3,
    name: "Two-Class Decision Forest",
    description: "Fast training, linear model",
    infoGraphics: infoGraphics3,
  },
  {
    image: thumbnail4,
    name: "Two-Class Neural Network",
    description: "Accurate, long training times",
    infoGraphics: infoGraphics4,
  },
  {
    image: thumbnail5,
    name: "Two-Class Locally-Deep Support Vector Machine",
    description: "Under 100 features",
    infoGraphics: infoGraphics5,
  },
  {
    image: thumbnail6,
    name: "Two-Class Support Vector Machine",
    description: "Under 100 features, linear model",
    infoGraphics: infoGraphics6,
  },
];

const Algorithms = () => {
  const [hoveredThumbnail, sethoveredThumbnail] = useState();
  const [selectedAlgorithm, setSelectedAlgorithm] = useState();

  const openAlgorithmInfoHandler = (thumbnail) => {
    setSelectedAlgorithm(() => thumbnail);
  };

  const closeAlgorithmInfomHandler = () => {
    setSelectedAlgorithm();
  };

  return (
    <>
      {selectedAlgorithm && (
        <AlgorithmInfo
          infoGraphics={selectedAlgorithm.infoGraphics}
          name={selectedAlgorithm.name}
          onClose={closeAlgorithmInfomHandler}
        />
      )}
      <Row>
        <Col className="d-flex justify-content-center">
          <h2 className="heading h2">
            Machine learning classification algorithms
          </h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <hr />
        </Col>
      </Row>
      <Row>
        {thumbnails.map((thumbnail) => (
          <Col
            xs={12}
            md={6}
            xl={4}
            className="no-padding"
            key={thumbnail.name}
            onMouseEnter={() => {
              sethoveredThumbnail(thumbnail.name);
            }}
            onMouseLeave={() => {
              sethoveredThumbnail();
            }}
            onClick={() => {
              openAlgorithmInfoHandler(thumbnail);
            }}
          >
            <Thumbnail
              thumbnailImage={thumbnail.image}
              algorithName={thumbnail.name}
              algorithmDesc={thumbnail.description}
              hoveredThumbnail={hoveredThumbnail}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Algorithms;
