import {Link, NavLink, Outlet} from "react-router-dom";
import styles from "./Layout.module.css";
export default function Root() {
    return (
        <div className={styles.App}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <a href="#">AdminPage</a>
            </div>
            <ul className={styles.menu}>
              <li>
                <Link to={"/admin"}>Home</Link>
              </li>
              <li>
                <a href="/admin/post/new">Posts</a>
              </li>
            </ul>
            <div className={styles.buttons}>
            <NavLink to="/">
              <input type="button" value="Logout" />
            </NavLink>
            </div>
          </nav>
        </header>
        <main className={styles.main}>
          <Outlet/>
        </main>
      </div>
    );
  }