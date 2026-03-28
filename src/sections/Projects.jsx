
import ProjectCard from '../components/ProjectCard';
import { motion } from "framer-motion";



const Projects = () => {
  const projects = [
    {
      title: "Todo App",
      description: "A feature-rich Todo List application built with React, supporting full CRUD operations including adding, editing, deleting, and marking tasks as completed. It uses Context API and useReducer for structured state management, with data persistence using localStorage and unique task identification via UUID.",
      tech: ["React", "Context API","Material", "LocalStorage"],
      demo: "https://mytodospro.netlify.app/",
      github: "https://github.com/solafaissa042/todoList/",
      githubBack:"" 
    },
    {
      title: "Weather App",
      description: "A weather application built with React and Redux Toolkit that fetches real-time data from an API. It supports Arabic/English languages and displays detailed weather information with a modern UI. ",
      tech: ["React", "Redux Toolkit", "Axios","MUI","i18next"],
      demo: "https://weatherreact10.netlify.app/",
      github: "https://github.com/solafaissa042/Weather",
      githubBack:"" 
    },
    {
      title: "Full-Stack Web App",
      description: "Built a secure multi-role authentication system using React, React Router v7, Axios, JWT, nodejs,expressjs and mongoDb. Features include login, register, role-based route protection, JWT token refresh, and protected admin/editor/user dashboards. ",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      demo: "https://frontsection.netlify.app/",
      github: "https://github.com/solafaissa042/Frontend-Section-Of-Node",
      githubBack:"https://github.com/solafaissa042/Node" 
    }
  ];

  return (
    <section className="projects" id="projects">
      
      <h2 data-aos="fade-up">Projects</h2>
      <motion.div
        className="projects-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
       
      </motion.div>
    </section>
  );
};

export default Projects;
