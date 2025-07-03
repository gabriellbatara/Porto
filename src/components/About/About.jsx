import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Fotografer</h3>
              <p>
                Berpengalaman dalam fotografi potret, street, hingga dokumentasi event. Mampu menangkap momen secara artistik dengan komposisi dan pencahayaan optimal.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Videografer & Editor</h3>
              <p>
                Terbiasa membuat konten video pendek, film dokumenter, dan video event. Ahli dalam pengambilan gambar dinamis serta editing dengan alur storytelling yang kuat.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Web Development Specialist</h3>
              <p>- Merancang dan mengembangkan website responsif dari wireframe hingga implementasi",</p>
              <p>- Mengoptimalkan performa dan pengalaman pengguna (UX) untuk berbagai platform",</p>
              <p>- Mengintegrasikan fitur-fitur dinamis dan sistem manajemen konten (CMS) sesuai kebutuhan klien</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
