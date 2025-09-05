import React from "react";
import "./skills.css";
import { motion } from "framer-motion";

const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
];

const Skills = () => {
  return (
    <motion.section
        className="skills-section"
        id="skills"
        initial={{ opacity: 0, x: 50 }}          // awal: geser dari kanan + transparan
        whileInView={{ opacity: 1, x: 0 }}       // pas masuk viewport: normal
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}                // animasi cuma sekali
        >
      <h2 className="skills-title">MY SKILLS</h2>
      <div className="skills-row">
        <div className="skills-track">
          {logos.concat(logos).map((logo, i) => (
            <img key={`row1-${i}`} src={logo} alt="logo" />
          ))}
        </div>
      </div>
      <div className="skills-row reverse">
        <div className="skills-track">
          {logos.concat(logos).map((logo, i) => (
            <img key={`row2-${i}`} src={logo} alt="logo" />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
