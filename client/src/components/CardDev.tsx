function CardDev() {

    return (
        <div className="card-contener">
            <figure className="card">
                
                    <img id="hero-picture" alt="PICTURE DU HERO" src="src/assets/images/CaptainAmerica.jpg" />
                    <img id="favorite-star" alt="F"/>
                    <button id="show-button">Show</button>
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
                    <button id="previous">Previous</button>
                    <button id="next">Next</button>
               
            </figure>
        </div>
    )
}

export default CardDev;