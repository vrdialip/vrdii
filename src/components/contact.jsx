import React from "react";
import "./contact.css";
import { Instagram, Github, MapPin, Globe, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    title: "Connect with Me",
    subtitle: "Social Media",
    items: [
      { icon: <Instagram size={18} />, text: "@vrdiialipp", link: "https://instagram.com/vrdiialipp" },
      { icon: <Github size={18} />, text: "vrdialip", link: "https://github.com/verdi-code" },
    ],
  },
  {
    title: "Contact Info",
    subtitle: "Location & Website",
    items: [
      { icon: <MapPin size={18} />, text: "Depok, Indonesia" },
      { icon: <Globe size={18} />, text: "vrdi.vercel.app", link: "https://www.example.com" },
    ],
    button: {
      icon: <MessageCircle size={18} />,
      text: "Whatsapp Saya",
      link: "https://wa.me/6285774093174",
    },
  },
];

const Contact = () => {
  return (
    <motion.section
        id="contact"
        className="contact-section"
        initial={{ opacity: 0, y: 50 }}           // awal: agak turun + transparan
        whileInView={{ opacity: 1, y: 0 }}        // pas masuk viewport: normal
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}                 // animasi cuma sekali
        >
      <div className="container">
        <h2 className="contact-title">📩 Contact Me</h2>

        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-card">
              <div className="contact-glow"></div>

              <h3 className="contact-card-title">{contact.title}</h3>
              <h4 className="contact-card-subtitle">{contact.subtitle}</h4>

              <ul className="contact-list">
                {contact.items.map((item, i) => (
                  <li key={i} className="contact-item">
                    {item.icon}
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-link"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>

              {contact.button && (
                <a
                  href={contact.button.link}
                  target="_blank"
                  rel="noreferrer"
                  className="wa-btn"
                >
                  {contact.button.icon} {contact.button.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
