interface CardDev {
  onBack: () => void;
}

function CardDev({ onBack }: CardDev) {
  return (
    <div className="card-contener">
      <figure className="card">
        <img
          id="hero-picture"
          alt="HERO"
          src="src/assets/images/CaptainAmerica.jpg"
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
          onClick={onBack}
          className="card-btn"
          type="button"
          aria-label="Fermer cette carte"
        >
          <i className="fa-solid fa-xmark" />
        </button>
        <div className="title-alias">
          <h3> CAPTAIN AMERICA </h3>
          <h4> Alias & Full-Name </h4>
        </div>
        <figcaption id="hero-information">
          <p>Gender : Male</p>
          <p>Race : human</p>
          <p>Height : 188cm</p>
          <p>Weight : 102kg</p>
        </figcaption>
        <h5>Powerstat</h5>
        <figcaption id="powerstat">
          <p>Intelligence : 50</p>
          <p>Strength : 50</p>
          <p>Speed : 50</p>
          <p>Durability : 50</p>
          <p>Power : 50</p>
          <p>Combat : 50</p>
        </figcaption>
        <button id="previous" type="button">
          Previous
        </button>
        <button id="next" type="button">
          Next
        </button>
      </figure>
    </div>
  );
}

export default CardDev;
