import Card from "./components/Card";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CardDev from "./components/CardDev";



function App() {
  return (
    <>  
    <header className="header">
      <Navbar />
      <Search />
      </header>
    <main className="container">
      <Card />
      <CardDev />
    </main>
    </>
    );
}

export default App;
