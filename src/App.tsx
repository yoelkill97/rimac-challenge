import { Routes, Route } from "react-router-dom";
import MainPage from "./presentation/pages/mainpage";
import PlanPage from "./presentation/pages/planpage";
import SummaryPage from "./presentation/pages/summarypage";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/plans" element={<PlanPage />} />
      <Route path="/summary" element={<SummaryPage />} />
    </Routes>
  );
}

export default App
