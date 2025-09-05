import React from "react";
import "./nav.css";
import { Home, User, BookOpen, Briefcase } from "lucide-react";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <a href="#home" className="nav-item">
        <Home size={22} />
        <span>Home</span>
      </a>
      <a href="#about" className="nav-item">
        <User size={22} />
        <span>About</span>
      </a>
      <a href="#skills" className="nav-item">
        <BookOpen size={22} />
        <span>Skills</span>
      </a>
      <a href="#project" className="nav-item">
        <Briefcase size={22} />
        <span>Projects</span>
      </a>
    </nav>
  );
};

export default BottomNav;
