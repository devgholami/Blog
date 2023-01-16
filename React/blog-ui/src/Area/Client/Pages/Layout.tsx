import { Outlet, Link } from "react-router-dom";
import { APP_CONTEXT } from "../../../Context/AppContext";
import { appDependencies } from "../../../Context/Dependencies";
import styles from "./Layout.module.css";

export default function Root() {
  return (
    <APP_CONTEXT.Provider value={appDependencies}>
      <div className={styles.App}>
        <header>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <Link to={"/"}>Blog Name</Link>
            </div>
            <ul className={styles.menu}>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/post/1"}>Latest</Link>
              </li>
              <li>
                <Link to={"/admin"}>Admin</Link>
              </li>
              <li>
                <Link to={"/"}>Services</Link>
              </li>
              <li>
                <Link to={"/"}>Contact</Link>
              </li>
            </ul>
            <div className={styles.buttons}>
              <input type="button" value="Login" />
              <input type="button" value="Register" />
            </div>
          </nav>
          <Outlet />
          <div className={styles["play-button"]}>
            <span className={styles.play}>Write new post</span>
            <i className="fas fa-play"></i>
          </div>
        </header>
      </div>
    </APP_CONTEXT.Provider>
  );
}
