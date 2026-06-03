import React from "react";
import "./Skills.css";

const skills = [
  {
    category: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Bootstrap"
    ]
  },
  {
    category: "Backend",
    technologies: [
      "Python",
      "Django",
      "REST API"
    ]
  },
  {
    category: "Database",
    technologies: [
      "MySQL",
      "PostgreSQL"
    ]
  },
  {
    category: "Tools & Platforms",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "PyCharm",
      "Colab",
      "Jupyter",
      "Postman"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">

      <div className="skills-container">

        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <h3>{skill.category}</h3>

              <div className="skill-list">
                {skill.technologies.map((tech, i) => (
                  <span className="skill-badge" key={i}>
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;