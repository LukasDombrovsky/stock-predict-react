import classes from "./Wifi.module.css";

const Wifi = (props) => {
  let wifiClassName = Math.round(props.accuracy * 10) * 10 + props.signal;

  return (
    <div className={`${classes["circle-container"]}`}>
      <div className={`${classes.circle} ${classes["one" + wifiClassName]}`}>
        <div className={`${classes.circle} ${classes["two" + wifiClassName]}`}>
          <div
            className={`${classes.circle} ${classes["three" + wifiClassName]}`}
          >
            <div
              className={`${classes.circle} ${classes["four" + wifiClassName]}`}
            >
              <div
                className={`${classes.circle} ${
                  classes["five" + wifiClassName]
                }`}
              >
                <div
                  className={`${classes.circle} ${
                    classes["six" + wifiClassName]
                  }`}
                >
                  <div
                    className={`${classes.circle} ${
                      classes["seven" + wifiClassName]
                    }`}
                  >
                    <div
                      className={`${classes.circle} ${
                        classes["eight" + wifiClassName]
                      }`}
                    >
                      <div
                        className={`${classes.circle} ${
                          classes["nine" + wifiClassName]
                        }`}
                      >
                        <div
                          className={`${classes.circle} ${
                            classes["ten" + wifiClassName]
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wifi;
