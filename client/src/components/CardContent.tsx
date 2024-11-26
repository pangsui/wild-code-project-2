import type { Hero } from "../lib/definition";
import styles from "./CardContent.module.css";

export default function CardContent({
  singleHero,
  handleShowDetails,
  isSelect,
}: {
  singleHero: Hero;
  isSelect: boolean;
  handleShowDetails: (id: number) => void;
}) {
  return (
    <div
      className={
        isSelect ? `${styles.card} ${styles.colorChange}` : styles.card
      }
    >
      <img width={50} src={singleHero.images.lg} alt={singleHero.name} />
      <h2>{singleHero.name}</h2>
      <button className={styles.star} type="button">
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
      <button
        className={styles.show}
        type="button"
        onClick={() => {
          handleShowDetails(singleHero.id);
        }}
      >
        show
      </button>
    </div>
  );
}
