import React, { useEffect, useRef, useState } from 'react';

// Impor semua komponen yang digunakan dalam aplikasi
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { ProjectsDigital } from "./components/ProjectsDigital/ProjectsDigital.jsx";
import { Services } from "./components/Services/Services.jsx";
import { Workflow } from "./components/Workflow/Workflow.jsx";
import { WhyWebsite } from "./components/WhyWebsite/WhyWebsite.jsx";
import { Statistics } from "./components/Statistics/Statistics.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Contact } from "./components/Contact/Contact.jsx"; // Pastikan komponen Contact ada dan diimpor dengan benar
import { FavoriteMusic } from "./components/FavoriteMusic/FavoriteMusic.jsx";
import { Footer } from "./components/Footer/Footer.jsx";


function App() {
  // useRef untuk menyimpan referensi ke setiap section untuk Intersection Observer
  const sectionRefs = useRef([]);
  // useState untuk mengontrol tampilan loading screen
  const [isLoading, setIsLoading] = useState(true);

  // useEffect untuk mengelola logika loading screen dan Intersection Observer
  useEffect(() => {
    // Timer untuk menyembunyikan loading screen setelah 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000 milidetik = 2 detik

    // Inisialisasi Intersection Observer untuk animasi scroll-reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jika elemen masuk ke dalam viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Tambahkan kelas 'visible'
          } else {
            // Opsional: Hapus kelas 'visible' saat elemen keluar viewport
            // Ini akan membuat animasi berulang setiap kali di-scroll
            // entry.target.classList.remove('visible');
          }
        });
      },
      {
        root: null, // Mengamati relatif terhadap viewport
        rootMargin: '0px', // Tidak ada margin tambahan di sekitar root
        threshold: 0.3, // Animasi akan dipicu saat 30% dari elemen terlihat
      }
    );

    // Iterasi melalui semua referensi section yang telah ditambahkan
    sectionRefs.current.forEach((section) => {
      if (section) { // Pastikan referensi section tidak null
        observer.observe(section); // Mulai mengamati section tersebut
      }
    });

    // Fungsi cleanup yang akan dijalankan saat komponen unmount
    return () => {
      clearTimeout(timer); // Bersihkan timer untuk mencegah memory leak
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section); // Berhenti mengamati section
        }
      });
    };
  }, []); // Array dependensi kosong berarti useEffect hanya berjalan sekali setelah render pertama

  return (
    <>
      {/* Loading screen akan ditampilkan jika isLoading bernilai true */}
      {isLoading && (
        <div className="loading-screen">
          {/* Gambar logo animasi untuk loading screen */}
          {/* Pastikan path gambar ini benar dan ada di folder public/assets/ */}
          {/* Spinner fallback jika gambar logo tidak ada atau tidak digunakan */}
          <div className="loading-spinner"></div>
        </div>
      )}

      {/* Konten website utama hanya akan dirender setelah loading selesai */}
      {!isLoading && (
        <> {/* Fragment digunakan sebagai pembungkus utama untuk semua section */}
          {/* Navbar ditempatkan di sini karena biasanya fixed dan tidak ikut di-scroll-reveal */}
          <Navbar /> 
          
          {/* Setiap section dibungkus dengan div dan diberi ref untuk scroll-reveal animation */}
          {/* Penomoran ref harus unik untuk setiap div pembungkus */}
          <div ref={(el) => (sectionRefs.current[0] = el)}><Hero /></div>
          <div ref={(el) => (sectionRefs.current[1] = el)}><About /></div>
          <div ref={(el) => (sectionRefs.current[2] = el)}><Services /></div>
          <div ref={(el) => (sectionRefs.current[3] = el)}><WhyWebsite /></div>
          <div ref={(el) => (sectionRefs.current[4] = el)}><Statistics /></div>
          <div ref={(el) => (sectionRefs.current[5] = el)}><Experience /></div>
          <div ref={(el) => (sectionRefs.current[6] = el)}><Projects /></div>
          <div ref={(el) => (sectionRefs.current[7] = el)}><ProjectsDigital /></div>
          <div ref={(el) => (sectionRefs.current[8] = el)}><Workflow /></div>
          {/* Komponen Contact (jika ada) */}
          <div ref={(el) => (sectionRefs.current[9] = el)}><Contact /></div> 
          <FavoriteMusic />
          <div ref={(el) => (sectionRefs.current[12] = el)}> <Footer /></div>
        </>
      )}
    </>
  );
}

export default App;