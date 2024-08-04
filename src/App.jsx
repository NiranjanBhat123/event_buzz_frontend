import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import EventPage from './pages/EventPage.jsx';
import Host from "./pages/Host.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path= "/host" element = {<Host/>}/>
          <Route path="/event/:id" element={<EventPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
