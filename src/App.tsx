import MainPage from "./pages/MainPage/MainPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import StylesPage from "./pages/StylesPage/StylesPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
const App: React.FC = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/styles" element={<StylesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;