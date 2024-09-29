import React from "react";
import styles from "../../styles/components/home/gallery.module.scss";

const Card = ({ cover, title, alt }) => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
                          url(${cover})`,
  };
  return (
    <article
      className={styles.card}
      style={backgroundImageStyle}
      aria-label={alt}
    >
      <h2 className={styles.title}>{title}</h2>
    </article>
  );
};

export default Card;
