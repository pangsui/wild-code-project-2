import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardDev from "../components/CardDev";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import Search from "../components/Search";
import type { Hero } from "../lib/definition";

export default function DetailsPage() {
  const [data, setData] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [input, setInput] = useState("");

  const BASE_URL = "https://akabab.github.io/superhero-api/api/";
  const query = "all.json";

  const filteredHeroes = data.filter((hero) => {
    const publisher = hero.biography.publisher
      ?.toLowerCase()
      .includes(input.toLowerCase());
    const allSearch = hero.name.toLowerCase().includes(input.toLowerCase());

    return publisher || allSearch;
  });

  useEffect(() => {
    const fetchData = async () => {
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
    };
    if (input.length < 1) {
      setData([]);
      return;
    }
    fetchData();
    setPage(1);
  }, [input]);

  const resultsPerPage = 10;
  const numPage = Math.ceil(data.length / resultsPerPage);
  const start = (page - 1) * resultsPerPage;
  const end = page * resultsPerPage;
  const currentData = filteredHeroes.slice(start, end);

  function handleNext() {
    if (page < numPage) setPage(page + 1);
  }

  function handlePrev() {
    if (page > 1) setPage(page - 1);
  }

  return (
    <>
      <header className="header">
        <Search
          setInput={setInput}
          input={input}
          numberResults={filteredHeroes.length}
        />
      </header>
      <main className="container">
        <div className="leftSection">
          {filteredHeroes.length !== 0 ? (
            <>
              {isLoading && <Loading />}
              {currentData && !error && !isLoading && (
                <Card data={currentData} setSelectedHero={setSelectedHero} />
              )}
              {error && <ErrorMessage message={error} name={""} />}
              {currentData?.length > 5 && (
                <div className="btnLeft">
                  {page > 1 && (
                    <button
                      type="button"
                      className="btnFirst"
                      onClick={handlePrev}
                    >
                      &larr;
                    </button>
                  )}
                  {page < numPage && (
                    <button
                      type="button"
                      className="btnSecond"
                      onClick={handleNext}
                    >
                      &rarr;
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            <p className="heroSearch">
              search for super hero by using the correct hero name😇
            </p>
          )}
        </div>

        {currentData?.length > 0 && (
          <div className="rightSection">
            {selectedHero ? (
              <CardDev selectedHero={selectedHero} />
            ) : (
              <p className="NoSuperHero">
                Click on a super hero show button at the left for all details.
                Happy exploring!😇
              </p>
            )}
          </div>
        )}
      </main>
    </>
  );
}
