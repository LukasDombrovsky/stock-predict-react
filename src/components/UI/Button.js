import { useState } from "react";
import Btn from "react-bootstrap/Button";

import classes from "./Button.module.scss";

const Button = (props) => {
  const { textColor, backgroundColor, backgroundColorHover, ...rest } = props;

  const [style, setStyle] = useState({
    backgroundColor: backgroundColor,
  });

  return (
    <Btn
      className={classes.button}
      onMouseEnter={() => {
        setStyle({ backgroundColor: backgroundColorHover });
      }}
      onMouseLeave={() => {
        setStyle({ backgroundColor: backgroundColor });
      }}
      style={style}
      {...rest}
    >
      <span className="uppercase" style={{ color: textColor }}>
        {props.children}
      </span>
    </Btn>
  );
};

export default Button;
