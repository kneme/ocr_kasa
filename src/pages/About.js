import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Collapsible from "../components/Collapsible";
import styles from "../styles/components/collapsible.module.scss";

const About = () => {
  const titles = ["Fiabilité", "Respect", "Service", "Sécurité"];
  const descriptions = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La qualité du service est au cœur de notre engagment chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ];
  const sections = titles.map((title, index) => [title, descriptions[index]]);
  return (
    <>
      <Header />
      <Banner src="./assets/img/aboutBanner.png" />
      <section className={styles.section}>
        {sections.map((section, index) => (
          <Collapsible key={index} title={section[0]} desc={section[1]} />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default About;
