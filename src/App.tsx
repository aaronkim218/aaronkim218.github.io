import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Portfolio from "./pages/Portfolio";
import More from "./pages/More";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="aaronkim-portfolio-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/more" element={<More />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
