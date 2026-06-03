import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Training from "./components/Training/Training";
import Leadership from "./components/Leadership/Leadership";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Training />
      <Leadership />
      <Contact />
    </>
  );
}

export default App;