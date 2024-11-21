import type { Hero } from "../lib/definition";
import styles from "./CardDev.module.css";

function CardDev({ selectedHero }: { selectedHero: Hero }) {
  return (
    <div className={styles.cardcontener}>
      {selectedHero.length !== 0 && (
        <figure className={styles.card}>
          <img
            id={styles.heropicture}
            alt={selectedHero.name}
            src={selectedHero?.images?.lg}
          />
          <button id={styles.star1} type="button">
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
            className={styles.cardbutton}
            type="button"
            aria-label="Fermer cette carte"
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <div className={styles.titlealias}>
            <h3> {selectedHero?.biography?.fullName} </h3>
            <h4>@Aliase {selectedHero?.biography?.aliases[0]}</h4>
          </div>
          <figcaption id={styles.heroinfo}>
            <p>Gender : {selectedHero?.appearance?.gender}</p>
            <p>Race : {selectedHero?.appearance?.race}</p>
            <p>Height : {selectedHero?.appearance?.height[1]}</p>
            <p>Weight : {selectedHero?.appearance?.weight[1]}</p>
          </figcaption>
          <h5>Powerstat</h5>
          <figcaption id={styles.powerstat}>
            <p>Intelligence : {selectedHero?.powerstats?.intelligence}</p>
            <p>Strength :{selectedHero?.powerstats?.strength} </p>
            <p>Speed : {selectedHero?.powerstats?.speed}</p>
            <p>Durability : {selectedHero?.powerstats?.durability}</p>
            <p>Power : {selectedHero?.powerstats?.power}</p>
            <p>Combat : {selectedHero?.powerstats?.combat}</p>
          </figcaption>
          <button id={styles.previous} type="button">
            Previous
          </button>
          <button id={styles.next} type="button">
            Next
          </button>
        </figure>
      )}
      {selectedHero.length === 0 && (
        <p className="NoSuperHero">
          Start by searching for a superhero or by clicking on any superhero
          from the list on the left. Enjoy exploring 😇!
        </p>
      )}
    </div>
  );
}

export default CardDev;
