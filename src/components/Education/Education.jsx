import React from "react";
import "./Education.css";

const educationData = [
   {
    year: "2024 - 2026",
    degree: "Master of Computer Applicationa (M.C.A)",
    institute: "Shri Vithal Education and Research Institute College of Engineering Autonomous Pandharpur",
    score: "CGPA: 9.21"
  },
  {
    year: "2021 - 2024",
    degree: "Bachelor of Computer Applicationa (B.C.A)",
    institute: "Instite of Computer and Management Studies Pandharpur",
    score: "CGPA: 8.7"
  },
  {
    year: "2020 - 2021",
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Vivek Verdhini Vidhylaya Pandharpur",
    score: "Percentage: 79%"
  },
  {
    year: "2018 - 2019",
    degree: "Secondary School Certificate (SSC)",
    institute: "Apte HighSchool Pandharpur",
    score: "Percentage: 62%"
  }
];

const Education = () => {
  return (
    <section id="education" className="education">

      <div className="education-container">

        <h2 className="section-title">
          Education
        </h2>

        <div className="timeline">

          {educationData.map((item, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="year">
                  {item.year}
                </span>

                <h3>{item.degree}</h3>

                <h4>{item.institute}</h4>

                <p>{item.score}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Education;