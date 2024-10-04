import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/components/page404.module.scss";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className={styles.container}>
        <img src="./assets/404.svg" alt="Logo d'erreur 404" />
        <p className={styles.text}>
          <span>Oups! La page que</span> vous demandez n'existe pas.
        </p>
        <button onClick={() => navigate("/")} className={styles.btn}>
          Retourner sur la page d'accueil
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Page404;
