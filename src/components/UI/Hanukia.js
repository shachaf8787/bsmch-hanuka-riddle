import React from "react";
import classes from "./Hanukia.module.css";

const Hanukia = (props) => {
  const CandleElementsLeft = props.candlesData
    .filter((item, index) => index < 4)
    .map((element) => (
      <div key={element.id} className={`${classes["candle-holder"]}`}></div>
    ));

  const CandleElementsRight = props.candlesData
    .filter((item, index) => index >= 4)
    .map((element) => (
      <div key={element.id} className={`${classes["candle-holder"]}`}></div>
    ));

  // Component's Returned JSX
  return (
    <>
      <img
        className={classes["skeleton"]}
        src={process.env.PUBLIC_URL + "./skeleton.svg"}
      />
      <div className={classes["candles-container"]}>
        <div className={classes["cluster-left"]}>{CandleElementsLeft}</div>
        <div className={`${classes["candle-container"]} ${classes["middle"]}`}>
          <div className={`${classes["candle-holder"]}`}></div>
        </div>
        <div className={classes["cluster-right"]}>{CandleElementsRight}</div>
      </div>
    </>
  );
};

export default Hanukia;
