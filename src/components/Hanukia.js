import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import { Gradients } from "../classes/classes";
import classes from "./Hanukia.module.css";

const Hanukia = (props) => {
  // const AllGradientsId = new Gradients("linear-gradient", 3).getGradientArray();

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
        <div className={`${classes["candle-holder"]} ${classes["middle"]}`}></div>
        <div className={classes["cluster-right"]}>{CandleElementsRight}</div>
      </div>
    </>
  );
};

export default Hanukia;
