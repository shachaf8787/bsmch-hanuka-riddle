import "./App.css";

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
        
      </figure>
      <main>
        <p className="text">The universe is big. It’s vast and complicated and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles</p>
      </main>
    </div>
  );
}

export default App;
