import React from "react";
import "./footer.css";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "@boxicons/react";

const Footer = () => {
  return (
    <div className="footer container">
      <p>© MindScribe — All Rights Reserved</p>

      <div className="social">
        <Facebook size="bxl" className="bx" />
        <Instagram size="bxl" className="bx" />
        <Twitter size="bxl" className="bx" />
        <Linkedin size="bxl" className="bx" />
        <Github size="bxl" className="bx" />
      </div>
    </div>
  );
};

export default Footer;
