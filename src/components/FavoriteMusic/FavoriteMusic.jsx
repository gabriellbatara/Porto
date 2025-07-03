// src/components/FavoriteMusic/FavoriteMusic.jsx

import React, { useRef, useState, useEffect } from "react"; // Impor useRef, useState, useEffect
import styles from "./FavoriteMusic.module.css";
import favoriteMusicData from "../../data/favoriteMusic.json";

export const FavoriteMusic = () => {
  const audioRef = useRef(null); // Ref untuk mengakses elemen audio DOM
  const [isPlaying, setIsPlaying] = useState(false); // State untuk melacak status play/pause

  // Mengelola pemutaran audio saat isPlaying berubah
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
          // Tangani error autoplay jika browser memblokir
          // Misalnya, tampilkan pesan ke pengguna
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Fungsi untuk toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <section className={styles.container} id="favorite-music">
      <h2 className={styles.title}>{favoriteMusicData.title}</h2>
      <div className={styles.content}>
        {/* Album Art Container */}
        <div className={styles.albumArtContainer} onClick={togglePlayPause}> {/* Klik pada album art juga bisa play/pause */}
          <img
            src={`/${favoriteMusicData.albumArtSrc}`}
            alt={`Album Art for ${favoriteMusicData.songTitle}`}
            className={styles.albumArt}
          />
          {/* Overlay play/pause icon di tengah album art */}
          <div className={styles.playOverlay}>
            {isPlaying ? (
              <span className={styles.pauseIcon}>&#10074;&#10074;</span> // Pause icon (dua bar vertikal)
            ) : (
              <span className={styles.playIcon}>&#9658;</span> // Play icon (segitiga)
            )}
          </div>
        </div>

        <div className={styles.songDetails}>
          <h3 className={styles.songTitle}>{favoriteMusicData.songTitle}</h3>
          <p className={styles.artist}>{favoriteMusicData.artist}</p>

          {/* Elemen Audio HTML5 */}
          {favoriteMusicData.audioSrc && (
            <div className={styles.audioPlayerControls}>
              <audio ref={audioRef} src={`/${favoriteMusicData.audioSrc}`} preload="metadata" /> {/* preload metadata untuk info durasi */}
              <button onClick={togglePlayPause} className={styles.playPauseButton}>
                {isPlaying ? "Pause" : "Play"}
              </button>
              {/* Anda bisa menambahkan kontrol volume, progress bar, dll. di sini */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};