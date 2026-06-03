import React from "react";
import "./Training.css";

const Training = () => {
  return (
    <section id="training" className="training">

      <div className="training-container">

        <h2 className="section-title">
          Training & Internship
        </h2>

        <div className="training-card">

          <div className="training-header">

            <h3>The Kiran Academy</h3>

            <span className="training-duration">
              Jan 2026 - June 2026
            </span>

          </div>

          <h4>
            Python Full Stack Development Training & Internship
          </h4>

          <p>
            Completed comprehensive training in Python Full Stack
            Development with practical exposure to real-world
            application development and industry-standard tools.
          </p>

          <div className="training-section">

            <h5>Technologies Learned</h5>

            <div className="tech-badges">

              <span>Python</span>
              <span>Django</span>
              <span>Data Science</span>
              <span>React JS</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>MySQL</span>
              <span>REST API</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Postman</span>

            </div>

          </div>

          <div className="training-section">

            <h5>Key Highlights</h5>

            <ul>
              <li>
                Developed full-stack web applications using Django and React.
              </li>

              <li>
                Designed and integrated relational databases using MySQL.
              </li>

              <li>
                Built and tested REST APIs.
              </li>

              <li>
                Used Git and GitHub for version control.
              </li>

              <li>
                Worked on project-based learning and practical assignments.
              </li>

              <li>
                Learned software development best practices and debugging.
              </li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Training;