/* 
import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <h1>Solafa Issa</h1>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;

 */
import React, { useState } from "react";

 export default function toggleDark() {
  const [open, setOpen] = useState(false);
 
  return (
    <nav>
      <div className="logo">Solafa Issa</div>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
         
      </ul>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
