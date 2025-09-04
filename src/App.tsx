import { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/Layout";
import Portfolio from "./pages/Portfolio";
import More from "./pages/More";
import { Loader2 } from "lucide-react";

function App() {
  const [particlesInit, setParticlesInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadStarsPreset(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);

  if (!particlesInit) {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="aaronkim-portfolio-theme">
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="aaronkim-portfolio-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Portfolio />} />
            <Route path="more" element={<More />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
