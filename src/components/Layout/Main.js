import React from "react";
import CloseBtn from "../UI/CloseBtn";
import Arrow from "../UI/Arrow";
import { useState } from "react";

export const Main = (props) => {
  const [isOpen, setIsOpen] = useState();
  
  const toggleTextHandler = () => {
    setIsOpen(prev => !prev)
  };

  return (
    <main>
      <CloseBtn onToggleText={toggleTextHandler} isOpen={isOpen}/>
      {isOpen && <p className="text">
        The universe is big. It’s vast and complicated and ridiculous. And
        sometimes, very rarely, impossible things just happen and we call them
        miracles
      </p>}
      <div className="arrows-container">
        <Arrow arrowDirection="prev" onClick={props.onNextArrow} />
        <Arrow arrowDirection="next" onClick={props.onPrevArrow} />
      </div>
      <div className="direction-arrow"></div>
    </main>
  );
};
