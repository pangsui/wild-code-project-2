interface Hero {
  images: Image;
  name: string;
}
interface Image {
  lg: string;
  md?: string;
  sm?: string;
}
interface Data {
  data: Hero;
}

export default function CardContent({ data }: Data) {
  return (
    <div className="Card">
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
      <button className="Show" type="button">
        show
      </button>
    </div>
  );
}
