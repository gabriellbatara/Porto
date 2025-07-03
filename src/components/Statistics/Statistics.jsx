import React from "react";
import styles from "./Statistics.module.css";
import statisticsData from "../../data/statistics.json";

export const Statistics = () => {
  return (
    <section className={styles.container} id="statistics">
      <div className={styles.topContent}>
        <img
          src={`/${statisticsData.logoSrc}`}
          alt="Web Agency Logo"
          className={styles.agencyLogo}
        />
        <p className={styles.tagline}>{statisticsData.tagline}</p>
      </div>

      <div className={styles.statsGrid}>
        {statisticsData.stats.map((stat, id) => (
          <div key={id} className={styles.statItem}>
            <h3 className={styles.statValue}>{stat.value}</h3>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};