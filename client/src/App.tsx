import Card from "./components/Card";
import "./App.css";
import CardDev from "./components/CardDev";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
