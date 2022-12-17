import React from "react";
import { useState } from "react";

const useOnclickStyle = (originalClassName, newClassname) => {
  const [clicked, setClicked] = useState(false);

  const onClickHandler = () => {
    setClicked(true);
  };

  if (clicked) {
    setTimeout(() => {
      setClicked(false);
    }, 200);
  }

  const className = `${originalClassName} ${clicked ? newClassname : ""}`;

  return {
    applyAnimatedClick: onClickHandler,
    animatedClassName: className,
    state: clicked,
  };
};

export default useOnclickStyle;
