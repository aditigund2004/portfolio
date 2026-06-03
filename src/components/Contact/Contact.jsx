// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "./Contact.css";

// emailjs.init("ZGiAAkvBTNrTxAJ66");

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_mox28y8",
//         "template_x2157si",
//         form.current,
//         "ZGiAAkvBTNrTxAJ66"
//       )
//       .then(
//         () => {
//           alert("Message sent successfully!");
//           form.current.reset();
//         },
//         (error) => {
//           alert("Failed to send message");
//           console.log(error);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="contact">
//       <div className="contact-form">
//         <form ref={form} onSubmit={sendEmail}>

//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             required
//           />

//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             required
//           />

//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//           />

//           <textarea
//             name="message"
//             rows="6"
//             placeholder="Your Message"
//             required
//           />

//           <button type="submit">
//             Send Message
//           </button>

//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

// EmailJS init
emailjs.init("ZGiAAkvBTNrTxAJ66");

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mox28y8",
        "template_x2157si",
        form.current,
        "ZGiAAkvBTNrTxAJ66"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        <h2 className="section-title">Contact Me</h2>

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">

            <h3>Get In Touch</h3>

            <p>
              I'm currently looking for opportunities as a Python Full Stack Developer.
              Feel free to connect with me.
            </p>

            <div className="contact-item">
              <FaEnvelope />
              <span>aditigund19@gmail.com</span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <span>+91 8530399234</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Pune, Maharashtra, India</span>
            </div>

            <div className="social-links">

              <a
                href="https://github.com/aditigund2004"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aditi-gund-3769ab2a7/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">

            <form ref={form} onSubmit={sendEmail}>

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
              />

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;