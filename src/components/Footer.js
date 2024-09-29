import React from "react";
import styles from "../styles/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src="./assets/footerLogo.svg" alt="Logo Kasa"></img>
        <small>© 2020 Kasa. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
