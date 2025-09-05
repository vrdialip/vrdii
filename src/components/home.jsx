import React from "react";
import "./home.css";
import { motion } from "framer-motion";



export default function Hero() {
  return (
    <motion.section
        id="home"
        className="homepage"
        initial={{ opacity: 0, y: 50 }}          // posisi awal: transparan + agak turun
        animate={{ opacity: 1, y: 0 }}           // saat pertama kali render
        transition={{ duration: 1, ease: "easeOut" }} // durasi & easing animasi
        >
      <div className="hero">
        {/* Bagian teks */}
        <div className="text-side slide-up">
          <h1 className="title">
            Hi, I'm <span>Verdi</span>
          </h1>
          <h2 className="subtitle">
            Junior Frontend Developer , Passionate about UI /UX
          </h2>
          <p className="desc">
            "This website was built with AI assistance while learning React and
            Vite, combining hands-on practice with smart guidance on components,
            styling, and modern animations."
          </p>
          <div className="cta fade-in-delay">
            <a href="#project" className="btn">
              🚀 View Projects
            </a>
            <a href="#contact" className="btn-outline">
              📩 Contact Me
            </a>
          </div>
        </div>

        {/* Bagian foto */}
        <div className="image-side scale-in">
          <div className="decor-shape shape1"></div>
          <div className="decor-shape shape2"></div>
          <img
            src="./karikatur-verdi.png"
            alt="Verdi"
            className="profile-img"
          />
        </div>
      </div>
    </motion.section>
  );
}
