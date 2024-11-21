import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContent}>
        <NavLink to="/">
          <img src="images/logo.png" alt="Logo" className={styles.headerLogo} />
        </NavLink>
        <NavLink to="/">
          {" "}
          <h1 className={styles.h1navbar}> HERODEX</h1>
        </NavLink>
      </div>
      <nav className={styles.navContent}>
        <div className={styles.allSections}>
          <NavLink to="/details" className={styles.link}>
            Explore heroes!
          </NavLink>
          <NavLink to="/allHeroes" className={styles.link}>
            All heroes
          </NavLink>
          <NavLink to="/favorites" className={styles.link}>
            Favorites
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
