import React from "react";
import CloseBtn from "../UI/CloseBtn";
import Arrow from "../UI/Arrow";
import { useState } from "react";
import classes from "./Main.module.css";

export const Main = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleTextHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const isPrevArrowDisabled = () => {
    if (0 === props.combinationNum) {
      return true;
    }
    return false;
  };

  const isNextArrowDisabled = () => {
    if (props.totalCombinations === props.combinationNum) {
      return true;
    }
    return false;
  };

  return (
    <main className={classes.main}>
      <CloseBtn onToggleText={toggleTextHandler} isOpen={isOpen} />
      {isOpen && (
        <p className="text">
          The universe is big. It’s vast and complicated and ridiculous. And
          sometimes, very rarely, impossible things just happen and we call them
          miracles
        </p>
      )}
      <div className="arrows-container">
        <Arrow
          arrowDirection="prev"
          onClick={props.onPrevArrow}
          isDisabled={isPrevArrowDisabled()}
        />
        <Arrow
          arrowDirection="next"
          onClick={props.onNextArrow}
          isDisabled={isNextArrowDisabled()}
        />
      </div>
      <div className="direction-arrow"></div>
    </main>
  );
};
