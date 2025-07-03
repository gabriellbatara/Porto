// src/components/Footer/Footer.jsx

import React from "react";
import styles from "./Footer.module.css";
import footerData from "../../data/footer.json"; // Import data footer

export const Footer = () => {
  return (
    <footer className={styles.container} id="footer">
      <p className={styles.closingStatement}>{footerData.closingStatement}</p>
      <p className={styles.copyright}>{footerData.copyright}</p>
    </footer>
  );
};