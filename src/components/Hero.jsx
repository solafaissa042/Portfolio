
import React from 'react';
import { motion } from "framer-motion";

const Hero = () => (
  <section className="hero" id="home" data-aos="fade-in">
    

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >Hi, I'm Solafa Issa</motion.h1>
       <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Full-Stack Web Developer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        I build modern web applications using React & Node.js
      </motion.p>
    
    <a href="#projects" className="btn">View Projects</a>
  </section>
);

export default Hero;


{/* <h1>Hi, I'm Solafa Issa</h1>
    <h2>Full-Stack Web Developer</h2>
    <p>I build modern and responsive web applications using React, Node.js, and MongoDB.</p> */}