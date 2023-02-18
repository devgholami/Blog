import { Outlet, Link } from "react-router-dom";
import { APP_CONTEXT } from "../../../Context/AppContext";
import { appDependencies } from "../../../Context/Dependencies";
import styles from "./Layout.module.css";

export default function Root() {
  return (
    <APP_CONTEXT.Provider value={appDependencies}>
      <div className={styles.App}>
        <header className={styles.header}>
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
            </ul>
            <div className={styles.buttons}>
            <i className="fa fa-login"></i>
              <input type="button" value="Login"></input>
              <input type="button" value="Register" />
            </div>
          </nav>
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </APP_CONTEXT.Provider>
  );
}
