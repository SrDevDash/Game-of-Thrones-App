import React from "react";

import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.littleContainer}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <button>Filter</button>
      </div>
      <div className={styles.littleContainer}>
        <div>
          <input type="text" name="searchInput" />
          <button>Search</button>
        </div>
        <Link to="/login">
          <p>Sign out</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
