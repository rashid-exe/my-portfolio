import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FutureProjects from "./pages/FutureProjects";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/future-projects" element={<FutureProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
