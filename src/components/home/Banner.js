import React from "react";
import styles from "../../styles/components/home/banner.module.scss";

const Banner = ({ title, src }) => {
  const backgroundImageStyle = title
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${src})`,
        filter: `drop-shadow(0 4px 3px rgba(0, 0, 0, 0.3))`,
      }
    : {
        backgroundImage: `url(${src})`,
      };
  return (
    <section className={styles.image} style={backgroundImageStyle}>
      {title ? <h1 className={styles.text}>{title}</h1> : null}
    </section>
  );
};

export default Banner;
