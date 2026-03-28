
import React from 'react';

import { motion } from "framer-motion";


const ProjectCard = ({ title, description, tech, github, demo,githubBack }) => {
  const x=githubBack!="" ?<a href={githubBack} target="_blank" rel="noopener noreferrer">GitHubBack</a> :""
  

  return(
    <div className="project-card" data-aos="fade-up">
      <motion.div
        className="project-card"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Tech:</strong> {tech.join(', ')}</p>
        <div className="project-links">
          <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {x}
        </div>
      </motion.div>
    </div>
  );
}



export default ProjectCard;
