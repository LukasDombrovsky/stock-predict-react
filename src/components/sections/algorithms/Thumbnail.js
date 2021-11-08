import { Image } from "react-bootstrap";

import classes from "./Thumbnail.module.scss";

const Thumbnail = (props) => {
  return (
    <div className={classes["portfolio-box"]}>
      <Image src={props.thumbnailImage} alt={props.algorithName} fluid />
      {props.hoveredThumbnail === props.algorithName && (
        <div className={classes["portfolio-box-caption"]}>
          <div className={classes["portfolio-box-caption-content"]}>
            <h3 className="heading h3">{props.algorithName}</h3>
            <p className="text-faded">{props.algorithmDesc}</p>
            <p className="text-faded">Click for more info</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
