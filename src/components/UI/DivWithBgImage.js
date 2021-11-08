const DivWithBgImage = (props) => {
  const style = {
    background: `url(${props.img}) no-repeat center`,
    backgroundSize: "cover",
  };

  if (props.addionalStyle) {
    Object.keys(props.addionalStyle).map((k) => {
      return (style[k] = props.addionalStyle[k]);
    });
  }

  return <div style={style}>{props.children}</div>;
};

export default DivWithBgImage;
