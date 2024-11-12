function CardDev() {
  return (
    <div className="card-contener">
      <figure className="card">
        <img
          id="hero-picture"
          alt="HERO"
          src="src/assets/images/CaptainAmerica.jpg"
        />
        <button id="star1" type="button">
          <img src="images/star.svg" alt="favori" />
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
        <button id="previous" type="button">Previous</button>
        <button id="next" type="button">Next</button>
      </figure>
    </div>
  );
}

export default CardDev;
