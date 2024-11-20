import { useEffect, useState } from "react";
import type { Hero } from "../lib/definition";

export default function AllHeroesPage() {
  const [data, setData] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = "https://akabab.github.io/superhero-api/api/";
  const query = "all.json";
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
      }
    };
    fetchData();
  }, []);

  return (
    <section className="Card">
      {!isLoading &&
        data.map((data) => (
          <div key={data.id}>
            <img width={50} src={data.images.lg} alt={data.name} />
            <h2>{data.name}</h2>
            <button className="Star" type="button">
              <svg
                aria-hidden="true"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="gold"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
              </svg>
            </button>
          </div>
        ))}
    </section>
  );
}
