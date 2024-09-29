import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import styles from "../styles/components/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
