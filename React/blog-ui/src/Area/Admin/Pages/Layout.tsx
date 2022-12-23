import {Outlet} from "react-router-dom";
import "./Layout.css";
export default function Root() {
    return (
        <div className="App">
        <header>
          <nav className="navbar">
            <div className="logo">
              <a href="#">AdminPage</a>
            </div>
            <ul className="menu">
              <li>
                <a href="#">Home</a>
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
            <div className="buttons">
              <input type="button" value="Logout" />
            </div>
          </nav>
          <Outlet/>
          <div className="play-button">
            <span className="play">Write new post</span>
            <i className="fas fa-play"></i>
          </div>
        </header>
      </div>
    );
  }