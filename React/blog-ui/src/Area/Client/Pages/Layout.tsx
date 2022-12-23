import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
export default function Root() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to={"/"}>Blog Name</Link>
          </div>
          <ul className="menu">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/post"}>Latest</Link>
            </li>
            <li>
              <Link to={"/"}>Offers</Link>
            </li>
            <li>
              <Link to={"/"}>Services</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
          <div className="buttons">
            <input type="button" value="Login" />
            <input type="button" value="Register" />
          </div>
        </nav>
        <Outlet />
        <div className="play-button">
          <span className="play">Write new post</span>
          <i className="fas fa-play"></i>
        </div>
      </header>
    </div>
  );
}
