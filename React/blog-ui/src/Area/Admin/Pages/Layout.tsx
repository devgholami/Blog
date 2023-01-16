import {Link, NavLink, Outlet} from "react-router-dom";
import styles from "./Layout.module.css";
export default function Root() {
    return (
        <div className={styles.App}>
        <header>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <a href="#">AdminPage</a>
            </div>
            <ul className={styles.menu}>
              <li>
                <Link to={"/admin"}>Home</Link>
              </li>
              <li>
                <a href="#">Latest</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className={styles.buttons}>
            <NavLink to="/">
              <input type="button" value="Logout" />
            </NavLink>
            </div>
          </nav>
          <Outlet/>
        </header>
      </div>
    );
  }