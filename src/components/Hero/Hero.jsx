// import React, { useEffect, useState } from "react";
// import "./Hero.css";

// import profileImage from "../../assets/images/profile.jpg";
// import resumeFile from "../../assets/resume/resume.pdf";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Hero = () => {
//   const roles = [
//     "Python Developer",
//     "Django Developer",
//     "React Developer",
//     "Full Stack Developer",
//   ];

//   const [text, setText] = useState("");
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     const currentRole = roles[roleIndex];

//     if (charIndex < currentRole.length) {
//       const timeout = setTimeout(() => {
//         setText((prev) => prev + currentRole[charIndex]);
//         setCharIndex((prev) => prev + 1);
//       }, 100);

//       return () => clearTimeout(timeout);
//     }

//     const wait = setTimeout(() => {
//       setText("");
//       setCharIndex(0);
//       setRoleIndex((prev) => (prev + 1) % roles.length);
//     }, 2000);

//     return () => clearTimeout(wait);
//   }, [charIndex, roleIndex]);

//   return (
//     <section id="home" className="hero">
//       <div className="hero-content">

//         <div className="hero-text">

//           <h3>Hello, I'm</h3>

//           <h1>Aditi Navnath Gund</h1>

//           <h2 className="typing-text">
//             {text}
//             <span className="cursor">|</span>
//           </h2>

//           <p>
//             Passionate about building responsive web applications using Python, Django, React JS, MySQL, and REST APIs, along with applying Data Science concepts for data analysis, visualization, and machine learning.
//           </p>

//           <div className="social-icons">

//             <a
//               href="https://github.com/aditigund2004"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FaGithub />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/aditi-gund-3769ab2a7/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FaLinkedin />
//             </a>

//           </div>

//           <div className="hero-buttons">

//             <a
//               // href="/resume.pdf"
//               href={resumeFile}
//               className="btn primary-btn"
//               download
//             >
//               Download Resume
//             </a>

//             <a
//               href="#contact"
//               className="btn secondary-btn"
//             >
//               Contact Me
//             </a>

//           </div>

//         </div>

//         <div className="hero-image">
//           <img src={profileImage} alt="Profile" />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useEffect, useState } from "react";
import "./Hero.css";

import profileImage from "../../assets/images/profile.jpg";
import resumeFile from "../../assets/resume/resume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// 👇 move outside so it's not recreated every render
const roles = [
  "Python Developer",
  "Django Developer",
  "React Developer",
  "Full Stack Developer",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }

    const wait = setTimeout(() => {
      setText("");
      setCharIndex(0);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearTimeout(wait);
  }, [charIndex, roleIndex]); // ✅ now safe

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h3>Hello, I'm</h3>
          <h1>Aditi Navnath Gund</h1>

          <h2 className="typing-text">
            {text}
            <span className="cursor">|</span>
          </h2>

          <p>
            Passionate about building responsive web applications using Python, Django, React JS, MySQL, and REST APIs, along with applying Data Science concepts for data analysis, visualization, and machine learning.
          </p>

          <div className="social-icons">
            <a href="https://github.com/aditigund2004" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/aditi-gund-3769ab2a7/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>

          <div className="hero-buttons">
            <a href={resumeFile} className="btn primary-btn" download>
              Download Resume
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;