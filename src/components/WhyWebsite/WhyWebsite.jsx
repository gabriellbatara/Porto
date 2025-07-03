// src/components/WhyWebsite/WhyWebsite.jsx

import React from "react";
import styles from "./WhyWebsite.module.css";
import whyWebsiteData from "../../data/whyWebsite.json"; // Import data

export const WhyWebsite = () => {
  return (
    <section className={styles.container} id="why-website">
      <div className={styles.content}>
        <div className={styles.textColumn}>
          <p className={styles.subtitle}>{whyWebsiteData.subtitle}</p>
          <h2 className={styles.title}>{whyWebsiteData.title}</h2>
          <p className={styles.description}>{whyWebsiteData.description}</p>
          {/* Tombol "Miliki Website" Dihapus */}
        </div>

        <div className={styles.benefitsGrid}>
          {whyWebsiteData.benefits.map((benefit, id) => (
            <div key={id} className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                <img
                  src={`/${benefit.iconSrc}`}
                  alt={benefit.heading}
                  className={styles.benefitIcon}
                />
              </div>
              <h3 className={styles.benefitHeading}>{benefit.heading}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};