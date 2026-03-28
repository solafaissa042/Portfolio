
const Skills = () => {
  const skills = {
    Frontend: ["HTML5", "CSS3", "JavaScript(ES6+)","TypeScript", "React", "Redux Toolkit","Next", "Bootstrap", "Material UI"],
    Backend: ["Node.js", "Express.js","JWT","bcrypt","Axios","REST APIs"],
    Database: ["MongoDB","Mongoose"],
    Tools: ["Git", "GitHub","code splitting","lazy loading","postman","Render","Netlify"]
  };

  return (
    <section className="skills" id="skills">
      <h2 data-aos="fade-up">Skills</h2>
      <div className="skills-grid">
        {Object.keys(skills).map((category, i) => (
          <div key={i} className="skill-category" data-aos="fade-left">
            <h3>{category}</h3>
            <ul>
              {skills[category].map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
