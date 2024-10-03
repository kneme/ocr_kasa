import React, { useState } from "react";
import styles from "../styles/components/collapsible.module.scss";

const Collapsible = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openedAttr = isOpen ? { opened: "" } : {};
  return (
    <div {...openedAttr} className={styles.collapsible}>
      <button type="button" className={styles.btn}>
        {title}
        <i
          {...openedAttr}
          className="fa-solid fa-chevron-up"
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </button>
      <div {...openedAttr} className={styles.content}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Collapsible;
