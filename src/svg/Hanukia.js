import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import { Gradients } from "../classes/classes";
import classes from "./Hanukia.module.css";

const DUMMY_CANDLES_DATA = [
  {
    id: "m1",
    participating: false,
    active: false,
  },
  {
    id: "m2",
    participating: false,
    active: false,
  },
  {
    id: "m3",
    participating: false,
    active: false,
  },
  {
    id: "m4",
    participating: false,
    active: false,
  },
];

const Hanukia = () => {
  // const AllGradientsId = new Gradients("linear-gradient", 3).getGradientArray();
  const [candlesData, setCandlesData] = useState(DUMMY_CANDLES_DATA);

  const CandleElement = candlesData.map((item) => {
    return <div key={item.id} className={classes["candle-holder"]}></div>;
  });

  return (
    <>
      <div className={classes["candles-container"]}>{CandleElement}</div>
    </>
  );
};

export default Hanukia;
