import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>"Let’s bring your vision to life — contact me today!"</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/email.png" alt="Email icon" />
          <a href="mailto:gabriellrvs24@gmail.com">gabriellrvs24@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/github.png" alt="github.icon" />
          <a href="https://github.com/dashboard">gabriellbatara</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/insta.png" alt="Instagram icon" />
          <a href="https://www.instagram.com/gebriewl?igsh=MzRlODBiNWFlZA==/">gebriewl</a>
        </li>
      </ul>
    </footer>
  );
};
