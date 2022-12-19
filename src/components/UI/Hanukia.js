import React from "react";
import FullCandle from "../svg/FullCandle";
import classes from "./Hanukia.module.css";

const Hanukia = (props) => {
  const candleElement = (element) => (
    <FullCandle
      key={element.id}
      element={element}
      className={classes["full-candle"]}
    />
  );

  const CandleElementsLeft = props.candlesData
    .filter((item, index) => index < 4)
    .map((element) => candleElement(element));

  const CandleElementsRight = props.candlesData
    .filter((item, index) => index >= 4)
    .map((element) => candleElement(element));

  // Component's Returned JSX
  return (
    <figure>
      <div className={classes["hanukia-container"]}>
        <img
          className={classes["skeleton"]}
          src={process.env.PUBLIC_URL + "./skeleton.svg"}
        />
        <div className={classes["candles-container"]}>
          <div className={classes["cluster-left"]}>{CandleElementsLeft}</div>
          <div
            className={`${classes["candle-container"]} ${classes["middle"]}`}
          >
            <div className={`${classes["candle-holder"]}`}></div>
          </div>
          <div className={classes["cluster-right"]}>{CandleElementsRight}</div>
        </div>
      </div>
      <img
        className={classes["background"]}
        src={process.env.PUBLIC_URL + "background.svg"}
      />
    </figure>
  );
};

export default Hanukia;
