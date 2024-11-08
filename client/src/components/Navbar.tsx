import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContent}>
        <img src="images/logo.png" alt="Logo" className={styles.headerLogo} />
        <h1> HERO-RAP</h1>
      </div>
      <nav className="navContent">
        <div className="bookmark">
          <svg
            className={styles.bookmarkIcon}
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M6 2c-1.1 0-2 .9-2 2v18l8-4 8 4V4c0-1.1-.9-2-2-2H6zm0 2h12v15.17l-6-3-6 3V4z" />
          </svg>
        </div>
      </nav>
    </header>
  );
}
