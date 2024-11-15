import { useCallback, useEffect, useState } from "react";
import "./App.css";

import Card from "./components/Card";
import CardDev from "./components/CardDev";
import ErrorMessage from "./components/ErrorMessage";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import type { Hero } from "./lib/definition";

function App() {
  const [data, setData] = useState<Hero[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  const BASE_URL = "https://akabab.github.io/superhero-api/api/";
  const query = "all.json";

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}${query}`);

      if (!response.ok)
        throw new Error("something went wrong! could not fetch data😖");
      const heroes = await response.json();

      setData(heroes);

      setIsLoading(false);
    } catch (err) {
      console.error((err as Error).message);
      setError((err as Error).message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let numPage = 0;
  let currentData = null;
  if (data) {
    numPage = Math.ceil(data.length / 10);

    const resultsPerPage = 6;
    const start = (page - 1) * resultsPerPage;
    const end = page * resultsPerPage;
    currentData = data.slice(start, end);
  }

  function handleNext() {
    if (page < numPage) setPage(page + 1);
  }

  function handlePrev() {
    if (page > 1) setPage(page - 1);
  }

  return (
    <>
      <header className="header">
        <Navbar />
        <Search />
      </header>
      <main className="container">
        <div className="leftSection">
          {isLoading && <Loading />}
          {currentData && !error && !isLoading && (
            <Card data={currentData} setSelectedHero={setSelectedHero} />
          )}
          {error && <ErrorMessage message={error} name={""} />}
          <div className="btnLeft">
            {page > 1 && (
              <button type="button" className="btnFirst" onClick={handlePrev}>
                Go to page {page - 1}
              </button>
            )}
            {page < numPage && (
              <button type="button" className="btnSecond" onClick={handleNext}>
                Go to page {page + 1}
              </button>
            )}
          </div>
        </div>
        <div className="rightSection">
          {selectedHero ? (
            <CardDev selectedHero={selectedHero} />
          ) : (
            <p className="NoSuperHero">
              Start by searching for a super hero or by clicking on a super hero
              on the list at the left. Happy exploring!😇
            </p>
          )}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
