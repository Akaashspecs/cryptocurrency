import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:bitcoin" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/bitcoin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
