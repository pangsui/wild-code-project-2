import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CardDev from "./components/CardDev";

interface Hero {
  id: number;
  images: Images;
  name: string;
  powerstats: Powerstat;
  biography: Biography;
}

interface Images {
  md: string;
}

interface Powerstat {
  power: string;
}

interface Biography {
  alignment: string;
}

function App() {
  // Type `data` as `Hero[]` since it holds an array of Hero objects
  const [data, setData] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = "https://akabab.github.io/superhero-api/api/";

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}all.json`);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.error((err as Error).message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      <header className="header">
        <Navbar />
        <Search />
      </header>
      <main className="container">
        <Card />
        <CardDev />

        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {data.map((hero: Hero, index) => (
              <div key={hero?.id || index}>
                <img src={hero?.images?.md} alt={hero.name} />
                <h2>{hero?.name}</h2>
                <p>Power: {hero?.powerstats?.power || "N/A"}</p>
                <p>Alignment: {hero?.biography?.alignment || "Unknown"}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default App;
