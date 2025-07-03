import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gabriell</h1>
        <p className={styles.description}>
          Dedicated to crafting impactful visual narratives, adept at bringing concepts to life through exceptionally compelling photos and videos.
        </p>
        <a href="mailto:gabriellrvs24@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img
        src="/assets/profil.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
