import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import { Gradients } from "../classes/classes";
import classes from "./Hanukia.module.css";

const Hanukia = (props) => {
  // const AllGradientsId = new Gradients("linear-gradient", 3).getGradientArray();

  const CandleElements = props.candlesData.map((item) => {
    return <div key={item.id} className={classes["candle-holder"]}></div>;
  });

  // Component's Returned JSX
  return (
    <>
      <div className={classes["candles-container"]}>{CandleElements}</div>
    </>
  );
};

export default Hanukia;
