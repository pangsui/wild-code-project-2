import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CardDev from "./components/CardDev";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ErrorMessage from "./components/ErrorMessage";

//Hero type
interface Hero {
  id: number;
  name: string;
  images: {
    lg: string;
    md?: string;
    sm?: string;
    xs?: string;
  };
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
}

function App() {
  // Type `data` as `Hero[]` since it holds an array of Hero objects
  const [data, setData] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const BASE_URL = "https://akabab.github.io/superhero-api/api/";
  const query = "all.json";

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}${query}`);

      if (!response.ok)
        throw new Error("something went wrong! could not fetch data😖");
      const data = await response.json();
      console.log(data);

      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.error((err as Error).message);
      setError((err as Error).message);
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
        <div className="leftSection">
          {isLoading && <Loading />}
          {!error && !isLoading && <Card data={data} />}
          {error && <ErrorMessage message={error} name={""} />}
        </div>
        <div className="rightSection">
          <CardDev />
        </div>
      </main>
    </>
  );
}

export default App;
