import { NavLink } from "react-router-dom";
import styles from "../components/HomePage.module.css";

export default function HomePage() {
  return (
    <section className={styles.homePage}>
      <h1>Bienvenue dans l'Univers Ultime des Super-Héros !</h1>

      <p>
        Bienvenue sur la destination ultime pour les fans de super-héros !
        Plongez dans un univers où courage, force et justice se rencontrent.
        Explorez des histoires fascinantes, découvrez des pouvoirs secrets et
        rejoignez la lutte contre le mal aux côtés de vos héros préférés. Que
        vous soyez fan de capes légendaires, d'aventures audacieuses ou de
        combats héroïques, notre site est la maison de tout ce qui concerne les
        super-héros. Préparez-vous à percer les secrets de vos personnages
        favoris, à découvrir des événements épiques et à vous immerger dans un
        univers aux possibilités infinies !
      </p>
      <div className={styles.allSections}>
        <NavLink to="/details" className={styles.link}>
          Explore heroes!
        </NavLink>
        <NavLink to="/allHeroes" className={styles.link}>
          All super heroes
        </NavLink>
        <NavLink to="/fevorites" className={styles.link}>
          Fevorites
        </NavLink>
      </div>
    </section>
  );
}
