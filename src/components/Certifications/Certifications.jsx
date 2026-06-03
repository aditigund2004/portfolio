import React from "react";
import "./Certifications.css";

import pythonCert from "../../assets/certificates/pythonML.png";
import djangoCert from "../../assets/certificates/researchp.png";
import sqlCert from "../../assets/certificates/cloud.png";
import reactCert from "../../assets/certificates/AI.png";
import Cert from "../../assets/certificates/oop.png";

const certifications = [
  
  {
    title: "Smart Helpdesk Ticketing Solution for IT Services using AL/Ml",
    organization: "Research Paper Publish by Velammal Institute of Technology Chennai",
    date: "2026",
    image: djangoCert,
    link: "#"
  },
  {
    title: "Python Enbedded with Machine Learning",
    organization: "Softtech Solution & Training",
    date: "2025",
    image: pythonCert,
    link: "#"
  },
  {
    title: "Cloud Foundations",
    organization: "Great Learning",
    date: "2024",
    image: sqlCert,
    link: "#"
  },
  {
    title: "Artificial Intelligence using Prolog Programming",
    organization: "Swayam",
    date: "2025",
    image: reactCert,
    link: "#"
  },
  {
    title: "Fundamental of Object Oriented Programming",
    organization: "Swayam NPTEL",
    date: "2025",
    image: Cert,
    link: "#"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">

      <div className="certifications-container">

        <h2 className="section-title">
          Certifications
        </h2>

        <div className="certifications-grid">

          {certifications.map((cert, index) => (
            <div className="certificate-card" key={index}>

              <img
                src={cert.image}
                alt={cert.title}
                className="certificate-image"
              />

              <div className="certificate-content">

                <h3>{cert.title}</h3>

                <p>
                  <strong>Organization:</strong>{" "}
                  {cert.organization}
                </p>

                <p>
                  <strong>Year:</strong>{" "}
                  {cert.date}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="view-btn"
                >
                  View Certificate
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Certifications;