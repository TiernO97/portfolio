import { Route, Routes } from "react-router-dom";

// Styles
import "./styles/App.scss";

// Components
import Home from "./pages/Home";
import Project from "./pages/Project";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Navbar from "./components/Navbar/Navbar";
import { useRef } from "react";

const App = () => {
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const goTo = (section) => {
    setTimeout(() => {
      switch (section) {
        case "home":
          return window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  
        case "about":
          return aboutRef.current.scrollIntoView({
            behavior: "smooth",
          });
  
        case "projects":
          return projectsRef.current.scrollIntoView({
            behavior: "smooth",
          });
  
        case "experience":
          return experienceRef.current.scrollIntoView({
            behavior: "smooth",
          });
  
        case "contact":
          return contactRef.current.scrollIntoView({
            behavior: "smooth",
          });
  
        default:
          return window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 0)
  };

  return (
    <>
    <Navbar scrollTo={goTo} />
    <NavbarMobile refProp={topRef} scrollTo={goTo} />
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Home
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            experienceRef={experienceRef}
            contactRef={contactRef}
          />
        }
      />
      <Route path="/project/:name" exact element={<Project />} />
    </Routes>
    </>
  );
};

export default App;
