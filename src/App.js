import "./App.css";
import "./media-queries.css"
import Hanukia from "./components/UI/Hanukia";
import { useState } from "react";
import { Main } from "./components/Layout/Main";
import allCandlesData from "./store/candles-data";

const NUM_OF_COMBINATIONS = 2;

// delete dummy_data  when using real data
const DUMMY_CANDLES_DATA = [
  [
    {
      id: "m1",
      participating: false,
      active: false,
    },
    {
      id: "m2",
      participating: true,
      active: true,
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
    {
      id: "m5",
      participating: true,
      active: true,
    },
    {
      id: "m6",
      participating: true,
      active: false,
    },
    {
      id: "m7",
      participating: false,
      active: false,
    },
    {
      id: "m8",
      participating: false,
      active: false,
    },
  ],
  [
    {
      id: "m1",
      participating: true,
      active: false,
    },
    {
      id: "m2",
      participating: true,
      active: true,
    },
    {
      id: "m3",
      participating: true,
      active: true,
    },
    {
      id: "m4",
      participating: false,
      active: false,
    },
    {
      id: "m5",
      participating: true,
      active: true,
    },
    {
      id: "m6",
      participating: true,
      active: false,
    },
    {
      id: "m7",
      participating: false,
      active: false,
    },
    {
      id: "m8",
      participating: false,
      active: false,
    },
  ],
  [
    {
      id: "m1",
      participating: true,
      active: true,
    },
    {
      id: "m2",
      participating: true,
      active: true,
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
    {
      id: "m5",
      participating: true,
      active: true,
    },
    {
      id: "m6",
      participating: true,
      active: false,
    },
    {
      id: "m7",
      participating: false,
      active: false,
    },
    {
      id: "m8",
      participating: false,
      active: false,
    },
  ]
];

function App() {
  const candlesData = DUMMY_CANDLES_DATA; // allCandlesData
  const [combinationNum, setCombinationNum] = useState(0);

  const handleNextArrow = () => {
    console.log("next combination");
    setCombinationNum((prevNo) => {
      if (prevNo === NUM_OF_COMBINATIONS) {
        return 0;
      }
      return prevNo + 1;
    });
  };

  const handlePrevArrow = () => {
    console.log("prev combination");
    setCombinationNum((prevNo) => {
      if (prevNo === 0) {
        return NUM_OF_COMBINATIONS;
      }
      return prevNo - 1;
    });
  };

  return (
    <div className="App">
      <header>
        <img
          id="logo"
          src={process.env.PUBLIC_URL + "./logo.png"}
          alt="לוגו בסמח"
        />
        <h1 className="title">בסמח אלפא</h1>
        <h2 className="subTitle">חידת חנוכה</h2>
      </header>
      <figure>
        <Hanukia candlesData={candlesData[combinationNum]} />
      </figure>
      <Main onNextArrow={handleNextArrow} onPrevArrow={handlePrevArrow} />
    </div>
  );
}

export default App;
