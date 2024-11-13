import Card from "./components/Card";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CardDev from "./components/CardDev";
import { useState } from "react";

function App() {
  const [isFirstCard, setIsFirstCard] = useState(true);
  const switchToSecondCard = () => {
    setIsFirstCard(false);
  };
  const switchToFirstCard = () => {
    setIsFirstCard(true);
  };
  return (
    <>
      <header className="header">
        <Navbar />
        <Search />
      </header>
      <main className="container">
      {isFirstCard ? 
                <Card onSwitch={switchToSecondCard} /> :
                <CardDev onBack={switchToFirstCard} />
            }
      </main>
    </>
  );
}

export default App;
