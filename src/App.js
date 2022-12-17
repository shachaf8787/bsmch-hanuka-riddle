import "./App.css";
import Hanukia from "./components/Hanukia";
import Arrow from "./svg/Arrow";
import { useState } from "react";

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
      <main>
        <p className="text">
          The universe is big. It’s vast and complicated and ridiculous. And
          sometimes, very rarely, impossible things just happen and we call them
          miracles
        </p>
        <div className="arrows-container">
          <Arrow arrowDirection="prev" onClick={handlePrevArrow}/>
          <Arrow arrowDirection="next" onClick={handleNextArrow}/>
        </div>
        <div className="direction-arrow"></div>
      </main>
    </div>
  );
}

export default App;
