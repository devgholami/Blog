import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <p>This is Admin Home Page.</p>
      </div>

      <Link to={"/admin/post/new"} className={styles["play-button"]}>
        <span className={styles.play}>Write new post</span>
        <i className="fas fa-play"></i>
      </Link>
    </>
  );
}
export default Home;
