import React from "react";
import styles from "./Workflow.module.css";
import workflowData from "../../data/workflow.json"; // Import data
// Ingat, kita tidak lagi menggunakan getImageUrl, jadi pastikan tidak ada impornya

export const Workflow = () => {
  return (
    <section className={styles.container} id="workflow">
      <h2 className={styles.title}>{workflowData.title}</h2>
      <div className={styles.content}>
        <div className={styles.stepsContainer}>
          {workflowData.steps.map((step, id) => (
            <div key={id} className={styles.stepItem}>
              <div className={styles.stepHeader}>
                <img
                  src={`/${step.iconSrc}`} // Path langsung ke ikon
                  alt={step.heading}
                  className={styles.stepIcon}
                />
                <span className={styles.stepLabel}>{step.label}</span>
              </div>
              <h3 className={styles.stepHeading}>{step.heading}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.imageQuoteContainer}>
          <div className={styles.imageWrapper}>
            <img
              src={`/${workflowData.mainImage}`} // Path langsung ke gambar utama
              alt="Workflow Main Visual"
              className={styles.mainWorkflowImage}
            />
            {/* Optional: Overlay di atas gambar jika diperlukan */}
            {/* <div className={styles.imageOverlay}></div> */}
          </div>
          <div className={styles.quoteBox}>
            <p className={styles.quoteText}>"{workflowData.quote}"</p>
          </div>
        </div>
      </div>
    </section>
  );
};