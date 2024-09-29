import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/components/header.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? `${styles.activeLink}` : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? `${styles.activeLink}` : "")}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
