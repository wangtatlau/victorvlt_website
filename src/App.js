import "./App.css";
import HomePage from "./pages/HomePage";
import PhotographyPage from "./pages/PhotographyPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photography" element={<PhotographyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
