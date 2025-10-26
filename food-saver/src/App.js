import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Donate from './pages/Donate';      // <— FoodForm inside this
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // <— FoodList inside this
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Sticky navbar */}
      <Navbar />

      {/* Main page content */}
      <main style={{ paddingTop: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer with contact anchor */}
      <Footer />
    </Router>
  );
}

export default App;
