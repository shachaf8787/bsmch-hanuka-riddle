import "./App.css";
import Hanukia from "./svg/Hanukia";

function App() {
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
        <Hanukia />
      </figure>
      <main>
        <p className="text">
          The universe is big. It’s vast and complicated and ridiculous. And
          sometimes, very rarely, impossible things just happen and we call them
          miracles
        </p>
        <div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
