import React, { useState } from "react";
import classes from "./CloseBtn.module.css";
import useOnclickStyle from "../../hooks/use-onclick-style";

const CloseBtn = (props) => {
  const { applyAnimatedClick, animatedClassName } = useOnclickStyle(
    classes.close,
    classes["onclick"]
  );

  const onClickHandler = () => {
    props.onToggleText();
    applyAnimatedClick();
  };

  const closeBtnClassName = `${animatedClassName} ${
    props.isOpen ? classes.open : classes.closed
  }`;

  return (
    <div className={classes['close-btn-container']}>
      <button className={closeBtnClassName} onClick={onClickHandler}></button>
    </div>
  );
};

export default CloseBtn;
