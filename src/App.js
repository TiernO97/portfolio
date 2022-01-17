import { Route, Routes } from "react-router-dom";

// Styles
import './styles/App.scss';

// Components
import Home from "./pages/Home";
import Project from "./pages/Project";

const App = () => {


  return (
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/project/:name" exact element={<Project />} />
      </Routes>
  );
}

export default App;
