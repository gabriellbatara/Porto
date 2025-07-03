// src/components/ProjectsDigital/ProjectsDigital.jsx

import React from "react";
import styles from "./ProjectsDigital.module.css";
import projectsDigitalData from "../../data/projectsDigital.json";

export const ProjectsDigital = () => {
  return (
    <section className={styles.container} id="projectsDigital">
      <h2 className={styles.title}>Digital Creations</h2>
      <div className={styles.projectsGrid}>
        {projectsDigitalData.map((project, id) => {
          return (
            <div key={id} className={styles.projectCard}>
              <img
                src={`/${project.imageSrc}`}
                alt={`Image of ${project.title}`}
                className={styles.projectImage}
              />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};