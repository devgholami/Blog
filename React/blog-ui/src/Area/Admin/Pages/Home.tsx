import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <p>This is Admin Home Page.</p>
      </div>
    </>
  );
}
export default Home;
