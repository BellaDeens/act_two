import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
        </button>
        <Header />
        <About />
        <Skills />
        <Education />
        <Contact /> 
        <Footer/>
        <script src="js/script.js"></script>
      </div>
    </div>
   
  );
}
export default App;