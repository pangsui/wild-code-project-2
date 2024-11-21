import type { Hero } from "../lib/definition";

function CardDev({ selectedHero }: { selectedHero: Hero }) {
  return (
    <div className="card-contener">
      {selectedHero.length !== 0 && (
        <figure className="card">
          <img
            id="hero-picture"
            alt={selectedHero.name}
            src={selectedHero?.images?.lg}
          />
          <button id="star1" type="button">
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
            className="card-btn"
            type="button"
            aria-label="Fermer cette carte"
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <div className="title-alias">
            <h3> {selectedHero?.biography?.fullName} </h3>
            <h4>@Aliase {selectedHero?.biography?.aliases[0]}</h4>
          </div>
          <figcaption id="hero-information">
            <p>Gender : {selectedHero?.appearance?.gender}</p>
            <p>Race : {selectedHero?.appearance?.race}</p>
            <p>Height : {selectedHero?.appearance?.height[1]}</p>
            <p>Weight : {selectedHero?.appearance?.weight[1]}</p>
          </figcaption>
          <h5>Powerstat</h5>
          <figcaption id="powerstat">
            <p>Intelligence : {selectedHero?.powerstats?.intelligence}</p>
            <p>Strength :{selectedHero?.powerstats?.strength} </p>
            <p>Speed : {selectedHero?.powerstats?.speed}</p>
            <p>Durability : {selectedHero?.powerstats?.durability}</p>
            <p>Power : {selectedHero?.powerstats?.power}</p>
            <p>Combat : {selectedHero?.powerstats?.combat}</p>
          </figcaption>
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
