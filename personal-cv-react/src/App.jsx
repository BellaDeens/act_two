import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];
  const education = [
    {
      year: "2024-Present",
      program: "BS Information Technology",
      school: "USTP - CDO"
    },
    {
      year: "2020-2024",
      program: "Senior High School - STEM",
      school: "USTP - Senior High School"
    },
    {
      year: "2016-2020",
      program: "Junior High School",
      school: "Philippine Science High School - Northern Mindanao Campus"
    },
    {
      year: "2010-206",
      program: "Elementary",
      school: "City Central School"
    }
  ];

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode?"Toggle Light Mode" : "Toggle Dark Mode"}
        </button>
        <Header />
        <About />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact /> 
        <ContactList /> 
        <Footer/>
      </div>
    </div>
   
  );
}
export default App;