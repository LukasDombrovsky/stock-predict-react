import Card from "../../UI/Card";
import CloseButton from "react-bootstrap/CloseButton";

import classes from "./AlgorithmInfo.module.scss";
import { Image } from "react-bootstrap";

const AlgorithmInfo = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <Card className={classes.modal}>
        <Image src={props.infoGraphics} alt={props.name} fluid />
        <CloseButton
          className={classes.close}
          variant="white"
          onClick={props.onClose}
        />
      </Card>
    </>
  );
};

export default AlgorithmInfo;
