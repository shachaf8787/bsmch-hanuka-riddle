import React, { useState } from "react";
import useOnclickStyle from "../../hooks/use-onclick-style";
import classes from "./Arrow.module.css";

const Arrow = (props) => {
  const { applyAnimatedClick, animatedClassName } = useOnclickStyle(
    `${classes.btn} ${classes[`icon-${props.arrowDirection || "next"}`]}`,
    classes["onclick"]
  );

  const onClickHandler = () => {
    props.onClick();
    applyAnimatedClick();
  };

  console.log(props.isDisabled);

  return (
    <button disabled={props.isDisabled} className={classes["btn-container"]}>
      <svg
        width="43"
        height="21"
        viewBox="0 0 43 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animatedClassName}
        onClick={onClickHandler}
      >
        <path
          d="M1 11H29"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.30359 10.2971L5.77104 5.64854L10.2385 1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.34937 20L1 10.6085"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 11H41.5385"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Arrow;
