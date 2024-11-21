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
		</header>
	);
}
