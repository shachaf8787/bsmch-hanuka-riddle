import React, { useEffect, useMemo, useState } from "react";
import classes from "./FullCandle.module.css";
import { Gradients } from "../../defenitions/gradient-class";
import { CSSTransition } from "react-transition-group";

const animationTiming = { enter: 300, exit: 300 };
const AllGradientsId = new Gradients("linear-gradient", 5).getGradientArray();
const AllDropshadowId = new Gradients("drop-shadow", 1).getGradientArray();

const FullCandle = (props) => {
  const { active: isActive, participating: isParticipating } = props.element;
  const [hasBottom, setHasBottom] = useState(false);
  const [hasFlame, setHasFlame] = useState(false);

  useEffect(() => {
    if (isParticipating) {
      setHasBottom(true);
    } else {
      setTimeout(() => {
        setHasBottom(false);
      }, animationTiming.exit);
    }
  }, [isParticipating]);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setHasFlame(true);
      }, animationTiming.enter - 200);
    } else {
      setTimeout(() => {
        setHasFlame(false);
      }, animationTiming.exit);
    }
  }, [isActive]);

  const activeCandleCanClassName = useMemo(
    () =>
      `${classes["candle"]} ${
        isParticipating ? classes["enter-active"] : classes["exit-active"]
      }`,
    [isParticipating]
  );

  const activeFireClassName = useMemo(
    () =>
      `${classes["fire"]} ${
        isActive ? classes["enter-active"] : classes["exit-active"]
      }`,
    [isActive]
  );

  return (
    <svg
      id="Layer_2"
      dataname="Layer 2"
      className={`${classes.svg} ${props.className}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 200 259.03"
    >
      <defs>
        <linearGradient
          id={AllGradientsId[0].id}
          x1="1556.66"
          y1="249.1"
          x2="1556.66"
          y2="192.61"
          gradientTransform="translate(1657.02) rotate(-180) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4e5e6e" />
          <stop offset="1" stopColor="#2c353e" />
        </linearGradient>
        <linearGradient
          id={AllGradientsId[1].id}
          x1="1556.66"
          y1="259.03"
          x2="1556.66"
          y2="246.72"
          gradientTransform="translate(1657.02) rotate(-180) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4e5e6e" />
          <stop offset="1" stopColor="#040405" />
        </linearGradient>
        <linearGradient
          id={AllGradientsId[2].id}
          x1="83.02"
          y1="201.63"
          x2="117.7"
          y2="201.63"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#fff0d5" />
        </linearGradient>
        <linearGradient
          id={AllGradientsId[3].id}
          x1="1583.53"
          y1="197.78"
          x2="1519.82"
          y2="254.42"
          xlinkHref={AllGradientsId[0].href}
        />
        <linearGradient
          id={AllGradientsId[4].id}
          x1="100.13"
          y1="149.63"
          x2="100.13"
          y2="90.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#efa07c" />
          <stop offset="1" stopColor="#ffe274" />
        </linearGradient>
        <filter id={AllDropshadowId[0].id} filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur result="blur" stdDeviation="30" />
          <feFlood floodColor="#ffca76" floodOpacity=".78" />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Layer_3" dataname="Layer 3">
        <g id="singleCandle">
          <path
            fill={AllGradientsId[0].url}
            d="M77.49,249.1h0c15.17-2.17,30.57-2.17,45.73,0h0s0-54.86,0-54.86h0c-15.17-2.17-30.57-2.17-45.73,0h0v54.86Z"
          />
          <path
            fill={AllGradientsId[1].url}
            d="M111.97,247.94c-2.49,.24-6.38,.5-11.14,.29-9.97-.44-14.23-2.53-15.24-.88-1.29,2.12,3.47,9.17,10.26,11.14,5.85,1.7,10.95-1.03,12.61-2.05,4.39-2.71,7.64-7.65,6.74-8.8-.46-.58-1.97-.17-3.22,.29Z"
          />
          {hasBottom && (
            <g className={`${activeCandleCanClassName}`}>
              <path
                fill="none"
                stroke="#63582d"
                strokeMiterlimit={10}
                d="M99.79,169.29c1.46-2.59,1.74-4.7,1.72-6.13-.04-4.02-2.38-6.01-2.3-10.53,.03-1.82,.44-3.29,.77-4.21"
              />
              <polygon
                fill={AllGradientsId[2].url}
                points="117.7 236.81 83.02 236.81 83.02 166.45 117.7 166.45 117.7 171.52 117.7 236.81"
              />
              <path
                fill="#babab9"
                d="M117.7,236.81h-34.69v-42.5l6.42,.61c7.27,.7,14.58,.7,21.85,0l6.42-.61v42.5Z"
              />
            </g>
          )}
          <path
            fill={AllGradientsId[3].url}
            d="M77.49,249.1l2.8,.51c13.27,2.4,26.86,2.4,40.13,0l2.8-.51v-54.86s-2.8,.51-2.8,.51c-13.27,2.4-26.86,2.4-40.13,0l-2.8-.51v54.86Z"
          />
          {hasBottom && hasFlame && (
            <path
              className={activeFireClassName}
              fill={AllGradientsId[4].url}
              filter={AllDropshadowId[0].url}
              d="M99.94,149.63c-2.39,.02-4.63-1.17-5.93-3.18-1.66-2.56-3.17-5.85-3.52-9.74-.8-8.99,4.44-14.32,7.01-21.03,2.21-5.78,3.47-11.72-1.25-25.45,4.12,3.6,5.47,6.91,5.93,9.3,.68,3.51,.12,4.03,1.39,9.2,1.43,5.83,3.38,8.2,5.22,13.72,2.26,6.76,.5,7.95-1.48,15.64-.4,1.56-.11,6.52-.54,7.82-.94,2.87-3.81,3.69-6.83,3.72Z"
            />
          )}
        </g>
      </g>
    </svg>
  );
};

export default FullCandle;
