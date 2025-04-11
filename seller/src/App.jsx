import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./Pages/Products/Products"; // Vérifie bien le nom du fichier et du composant
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AuthPage from "./components/AuthPage/AuthPage"; // AuthPage avec Login/Register/Forgot
import "./index.css"; // Importation du fichier CSS où tu as configuré Tailwind

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} /> {/* Route mise au pluriel */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default App;
