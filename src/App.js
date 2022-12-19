import "./App.css";
import "./media-queries.css";
import Hanukia from "./components/UI/Hanukia";
import { useState } from "react";
import { Main } from "./components/Layout/Main";
import allCandlesData from "./store/candles-data";

const NUM_OF_COMBINATIONS = allCandlesData.length - 1;
const candlesData = allCandlesData;
// delete dummy_data  when using real data

function App() {
  // allCandlesData
  const [combinationNum, setCombinationNum] = useState(0);

  const handleNextArrow = () => {
    console.log("next combination");
    setCombinationNum((prevNo) => {
      if (prevNo === NUM_OF_COMBINATIONS) {
        return prevNo;
      }
      return prevNo + 1;
    });
  };

  const handlePrevArrow = () => {
    console.log("prev combination");
    setCombinationNum((prevNo) => {
      if (prevNo === 0) {
        return 0;
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
      <Hanukia candlesData={candlesData[combinationNum]} />
      <Main
        onNextArrow={handleNextArrow}
        onPrevArrow={handlePrevArrow}
        combinationNum={combinationNum}
        totalCombinations={NUM_OF_COMBINATIONS}
      />
    </div>
  );
}

export default App;
