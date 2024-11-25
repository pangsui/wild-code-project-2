import { useState } from "react";
import styles from "./CardDev.module.css";
import StarRating from "./StarRating";
import { useContextProvider } from "./context/ContextProvider";

function CardDev() {
  const { selectedHero, handleFavorite, handleClose, isClose } =
    useContextProvider();
  // state to get rating from star component
  const [rating, setRating] = useState(0);
  const buttonStyle = {
    border: "none",
    cursor: "pointer",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    backgroundColor: "gold",
    color: "black",
    fontSize: "1.3rem",
  };

  return (
    <div className={styles.cardcontener}>
      {selectedHero?.length !== 0 && isClose && (
        <figure className={styles.card}>
          <img
            id={styles.heropicture}
            alt={selectedHero?.name}
            src={selectedHero?.images?.lg}
          />
          <StarRating
            maxRating={10}
            onSetRating={(rating: number) => setRating(rating)}
          />

          <button
            className={styles.cardbutton}
            type="button"
            onClick={() => handleClose()}
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
          {rating > 0 && (
            <button
              style={buttonStyle}
              type="button"
              onClick={() => handleFavorite()}
            >
              Add to favourite
            </button>
          )}
        </figure>
      )}
      {selectedHero?.length === 0 && (
        <p className="NoSuperHero">
          Start by searching for a superhero or by clicking on any superhero
          from the list on the left. Enjoy exploring 😇!
        </p>
      )}
    </div>
  );
}

export default CardDev;
