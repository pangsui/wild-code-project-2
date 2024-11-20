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
          <h1> HERODEX</h1>
        </NavLink>
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
      </div>
      <nav className="navContent">
        <button type="button" className={styles.bookmark}>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M6 2c-1.1 0-2 .9-2 2v18l8-4 8 4V4c0-1.1-.9-2-2-2H6zm0 2h12v15.17l-6-3-6 3V4z" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
