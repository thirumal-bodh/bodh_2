import React from "react";
import Welcome from './pages/welcome.js';
import Login from './pages/login.js';
import Signup from './pages/signup.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";


function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
