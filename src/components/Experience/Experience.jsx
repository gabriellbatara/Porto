// src/components/Experience/Experience.jsx

import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";


export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>EXPERIENCE</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  {/* Perubahan di sini: Hanya tampilkan historyItem.role */}
                  <h3>{historyItem.role}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, idx) => {
                      return <li key={idx}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};