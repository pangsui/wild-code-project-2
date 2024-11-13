import CardContent from "./CardContent";

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
interface Data {
  data: Hero[];
}

function Card({ data }: Data) {
  return (
    <section>
      {data.map((hero) => (
        <CardContent key={hero.id} data={hero} />
      ))}
    </section>
  );
}

export default Card;
