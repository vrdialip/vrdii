// About.jsx
import React, { useState } from "react";
import "./About.css";
import { Users, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handleOpen = (type) => {
    setActivePopup(type);
  };

  const handleClose = () => {
    setActivePopup(null);
  };

  return (
    <motion.section
        id="about"
        className="about-section"
        initial={{ opacity: 0, x: -50 }}      // posisi awal (transparan + geser kiri)
        whileInView={{ opacity: 1, x: 0 }}   // pas masuk viewport
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}            // animasi cuma sekali
        >
      <h2 className="about-title">About</h2>
      <div className="about-grid">
        <div className="about-card" onClick={() => handleOpen("team")}>
          <Users size={32} />
          <p>My Team</p>
        </div>
        <div className="about-card" onClick={() => handleOpen("education")}>
          <BookOpen size={32} />
          <p>Education</p>
        </div>
        <div className="about-card" onClick={() => handleOpen("achievement")}>
          <Award size={32} />
          <p>Top Achievement</p>
        </div>
      </div>

      {/* Popup */}
      {activePopup && (
        <div className="popup-overlay" onClick={handleClose}>
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="popup-close" onClick={handleClose}>
              ✕
            </button>

            {activePopup === "team" && (
              <div>
                <img
                  src="./team2.jpg"
                  alt="Team"
                  className="popup-img"
                />
                <h3>My Team</h3>
                <p>
                  We are a small development team from SMK YAJ Depok, passionate about
                  building innovative and creative digital solutions together.
                </p>
              </div>
            )}

            {activePopup === "education" && (
              <div>
                <img
                  src="./yaj.jpg"
                  alt="Education"
                  className="popup-img"
                />
                <h3>Education</h3>
                <p>
                  I am currently a student at SMK YAJ Depok, continuously learning
                  and growing my skills in software and web development.
                </p>
              </div>
            )}

            {activePopup === "achievement" && (
              <div>
                <img
                  src="./sertifikat.jpg"
                  alt="Achievement"
                  className="popup-img"
                />
                <h3>Top Achievement</h3>
                <p>
                  I was honored to be in the Top 5 of the National UMKM Website
                  Competition ITS Day 2025 with my amazing team.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default About;
