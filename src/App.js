import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import DarkThemeProvider from "./themes/DarkThemeProvider";
import { AppProvider } from "./context/AppContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div height="100vh">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

const AppWrapper = () => {
  return (
    <AppProvider>
      <DarkThemeProvider>
        <App />
      </DarkThemeProvider>
    </AppProvider>
  );
};

export default AppWrapper;
