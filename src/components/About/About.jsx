import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <h2 className="section-title">About Me</h2>

        <div className="about-content">

          {/* Left Side */}

          <div className="about-left">

            <div className="about-card">

              <h3>Personal Introduction</h3>

              <p>
               Hello! I’m Aditi Navnath Gund, an enthusiastic Python Full Stack Developer with a strong passion for building modern, scalable web applications. I enjoy exploring new technologies and applying them to develop practical, real-world solutions. I am continuously learning and improving my skills in backend development, frontend technologies, and software engineering concepts, with a focus on writing clean, efficient, and maintainable code.
              </p>

            </div>

            <div className="about-card">

              <h3>Career Objective</h3>

              <p>
               Results-driven and enthusiastic MCA student with strong knowledge of Python, Flask, Django, REST APIs, and software development concepts. Skilled in developing backend applications, API integration, debugging, and problem-solving with hands-on experience in building scalable web applications and data-driven solutions. Familiar with SDLC concepts, application workflows, and software quality processes gained through academic projects and training. A quick learner with strong analytical thinking, teamwork, and communication skills, eager to begin a career as a Full Stack Developer and in Data Science, contributing effectively to software development and testing environments.
              </p>

            </div>

            <div className="about-card">

              <h3>Internship Experience</h3>

              <h4>The Kiran Academy, Pune</h4>

              <p>
                Python Full Stack Development Training & Internship
              </p>

              <ul>
                <li>Developed web applications using Django.</li>
                <li>Worked with MySQL database integration.</li>
                <li>Created responsive frontend interfaces using React JS.</li>
                <li>Used Git and GitHub for version control.</li>
                <li>Tested APIs using Postman.</li>
                <li>Worked with Python Data Science libraries such as NumPy, Pandas, Matplotlib, and Scikit-learn for data analysis and basic machine learning tasks.</li>
              </ul>

            </div>

          </div>

          {/* Right Side */}

          <div className="about-right">

            <div className="details-card">

              <h3>Personal Details</h3>

              <div className="detail-item">
                <strong>Name:</strong> Aditi Navnath Gund
              </div>

              <div className="detail-item">
                <strong>Email:</strong> aditigund19@gmail.com
              </div>

              <div className="detail-item">
                <strong>Phone:</strong> +91 8530399243
              </div>

              <div className="detail-item">
                <strong>Location:</strong> Pune, Maharashtra
              </div>

              <div className="detail-item">
                <strong>Degree:</strong> M.C.A.
              </div>

              <div className="detail-item">
                <strong>Specialization:</strong> Computer Applications
              </div>

              <div className="detail-item">
                <strong>Experience:</strong> Fresher
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;