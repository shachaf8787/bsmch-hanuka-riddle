import "./App.css";
import Hanukia from "./components/UI/Hanukia";
import { useState } from "react";
import { Main } from "./components/Layout/Main";


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
  {
    id: "m5",
    participating: false,
    active: false,
  },
  {
    id: "m6",
    participating: false,
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
];

function App() {
  const [candlesData, setCandlesData] = useState(DUMMY_CANDLES_DATA);

  const handleNextArrow = () => {
    console.log("next combination");
  }

  const handlePrevArrow = () => {
    console.log("prev combination");
  }

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
        <Hanukia candlesData={candlesData}/>
      </figure>
      <Main onNextArrow={handleNextArrow} onPrevArrow={handlePrevArrow}/>
    </div>
  );
}

export default App;
