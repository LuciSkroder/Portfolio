import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import CVPage from "./pages/CVPage";
import NavBar from "./components/NavBar";
import DetailPage from "./pages/DetailPage";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/Portfolio/"}>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/projects/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
