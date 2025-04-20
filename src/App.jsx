import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage";
import Hackathons from "./pages/Hackathons.jsx";
import NetworkBackground from "./components/NetworkBackground.jsx";
import "./assets/styles/style.css";

function App() {
  return (
    <>
      <NetworkBackground />
      <Router>
        <Routes>
          {/* Defina as rotas aqui */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/hackathons" element={<Hackathons />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
