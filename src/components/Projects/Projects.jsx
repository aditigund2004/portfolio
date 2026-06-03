import React from "react";
import "./Projects.css";

// import project1 from "../../assets/images/project1.png";
// import project2 from "../../assets/images/project2.png";
// import project3 from "../../assets/images/project3.png";

const projects = [
  {
    title: "Smart Helpdesk Ticketing Solution for IT Services using AI/M",
    // image: project1,
    description: "Built a scalable role-based ticketing system for Admins, Technicians, and Users, improving issue tracking and resolution efficiency. Designed and implemented RESTful APIs using Flask and performed API testing using Postman to ensure reliability and performance. Developed and validated test cases for ticket workflows, improving system stability and ensuring smooth handling of 100+ simulated requests.",
    technologies: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "AI",
      "ML - Logistic Regression",
    ],
    github:
      "https://github.com/yourusername/mock-evaluation-system",
    demo: "#"
  },

  {
    title: "Green Harvest– Machine Learning Based Fertilizer Optimization",
    // image: project2,
    description:
      "Developed a machine learning-based fertilizer recommendation application using Python, Flask, and RESTful APIs to assist farmers in selecting suitable fertilizers based on soil and crop conditions. Built and integrated backend APIs using Flask for processing soil nutrients, crop type, environmental conditions, and fertilizer recommendation workflows.",
    technologies: [
      "Python",
      "Flask",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "ML - Random Forest Classifier"
    ],
    github:
      "https://github.com/yourusername/employee-management",
    demo: "#"
  },

  {
    title: "Institute Management System (Microservices-Based)",
    // image: project3,
    description:
      " Developing a scalable institute management system using Java, Spring Boot, and MySQL with microservices architecture. Designed independent services for core modules such as Student Management, Course Management, and Authentication, enabling modular development and deployment. Implemented RESTful APIs for inter-service communication and ensured efficient data handling across distributed services. Integrated Spring Boot with MySQL for persistent storage, optimizing queries for improved performance",
    technologies: [
      "Java",
      "React",
      "MySQL",
      "Spring Boot",
      "Hibernate",
      
    ],
    github:
      "https://github.com/aditigund2004/Mock_Evaluation_project",
    demo: "#"
  },

   {
    title: "Expense Tracker Application using Flutter and Firebase",
    // image: project3,
    description:
      " Developed a cross-platform expense tracking mobile application using Flutter and Firebase for efficient personal finance management. Implemented real-time data synchronization using Firebase Firestore to ensure consistent and secure data updates across devices",
    technologies: [
      "Flutter",
      "Firebase",
      
    ],
    github:
      "https://github.com/aditigund2004/FlutterProject",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">

      <div className="projects-container">

        <h2 className="section-title">
          My Projects
        </h2>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              {/* <img
                src={project.image}
                alt={project.title}
                className="project-image"
              /> */}

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">

                  {project.technologies.map((tech, i) => (
                    <span key={i}>
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a> */}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;