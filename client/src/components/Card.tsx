import type { Hero } from "../lib/definition";
import CardContent from "./CardContent";

function Card({
  data,
  setSelectedHero,
}: {
  data: Hero[];
  setSelectedHero: (hero: Hero) => void;
}) {
  function handleShowDetails(heroID: number) {
    const heroShow = data.find((hero) => hero.id === heroID);
    if (heroShow) {
      setSelectedHero(heroShow);
    }
  }
  return (
    <section>
      {data.map((hero) => (
        <CardContent
          key={hero.id}
          data={hero}
          handleShowDetails={handleShowDetails}
        />
      ))}
    </section>
  );
}

export default Card;
