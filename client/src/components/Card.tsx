function Card() {
  return (
    <div className="Card">
      <img width={50} src="images/herotest.png" alt="hero 1" />
      <h2>HERO NAME</h2>
      <button className="Star" type="button">
        <img src="images/star.svg" alt="favori" />
      </button>
      <button className="Show" type="button">show</button>
    </div>
  );
}

export default Card;
