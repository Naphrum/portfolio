import logo from './logo.svg';
import './App.css';
import { Grid, Button } from '@mui/material'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Landing from './components/Landing/Landing';
import { AppProvider } from "./context/AppContext";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
        <>
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
  );
}

const AppWrapper = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default AppWrapper;

