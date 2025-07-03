// src/components/Services/Services.jsx

import React from "react";
import styles from "./Services.module.css"; // Menggunakan CSS Modular baru
import servicesData from "../../data/services.json"; // Import data layanan

export const Services = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.title}>What I Do</h2> {/* Judul untuk bagian ini */}
      <div className={styles.servicesGrid}>
        {servicesData.map((service, id) => {
          return (
            <div key={id} className={styles.serviceItem}>
              <div className={styles.iconWrapper}>
                {/* Ingat, kita tidak lagi menggunakan getImageUrl, jadi pastikan tidak ada impornya */}
                <img
                  src={`/${service.iconSrc}`} // Path langsung ke ikon di public/icons/
                  alt={service.title}
                  className={styles.serviceIcon}
                />
              </div>
              <p className={styles.serviceTitle}>{service.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};