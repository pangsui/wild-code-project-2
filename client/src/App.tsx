import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const batchSize = 50;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    let allHeroes: any[] = [];

    try {
      for (let i = 1; i <= 700; i += batchSize) {
        // Create batch requests for this group of heroes
        const requests = Array.from({ length: batchSize }, (_, j) =>
          fetch(
            `https://www.superheroapi.com/api.php/696db14a13ace293d9692b1472230b5d/${
              i + j
            }`,
          ).then((res) => (res.ok ? res.json() : null)),
        );

        // Await completion of all requests in this batch
        const results = await Promise.all(requests);
        const heroesBatch = results.filter((hero) => hero !== null);

        // Append the batch to the overall heroes list
        allHeroes = [...allHeroes, ...heroesBatch];

        // Optionally update state progressively if you want to show heroes in batches
        setData((prevData) => [...prevData, ...heroesBatch]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // Once all data has been fetched, hide the loader
      setLoading(false);
    }
  }

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <main className="container">
      <Navbar />
      <Search />
      {/* {loading && <Loading />} */}
      <div>
        {data.map((hero, index) => (
          <div key={hero.id || index}>
            <img src={hero.image?.url} alt={hero.name} />
            <h2>{hero.name}</h2>
            <p>Power: {hero.powerstats?.power || "N/A"}</p>
            <p>Alignment: {hero.biography?.alignment || "Unknown"}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
