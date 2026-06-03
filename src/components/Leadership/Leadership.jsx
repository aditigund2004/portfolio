import React from "react";
import "./Leadership.css";

const activities = [
  {
    title: "Leadership",
    icon: "👩‍💼",
    items: [
      "Class Representative",
      "Team Lead in Academic Projects",
      "Coordinated Group Activities"
    ]
  },
  {
    title: "Technical Activities",
    icon: "💻",
    items: [
      "Participated in Coding Challenges",
      "Built Full Stack Projects",
      "Worked on Real-Time Development Tasks"
    ]
  },
  {
    title: "Workshops & Training",
    icon: "🎓",
    items: [
      "Python Full Stack Development",
      "React JS Workshops",
      "Database Management Sessions"
    ]
  },
  {
    title: "Achievements",
    icon: "🏆",
    items: [
      "Successfully Completed Internship",
      "Completed Multiple Certifications",
      "Developed End-to-End Web Applications"
    ]
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="leadership">

      <div className="leadership-container">

        <h2 className="section-title">
          Leadership & Activities
        </h2>

        <div className="activities-grid">

          {activities.map((activity, index) => (
            <div className="activity-card" key={index}>

              <div className="activity-icon">
                {activity.icon}
              </div>

              <h3>{activity.title}</h3>

              <ul>
                {activity.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Leadership;