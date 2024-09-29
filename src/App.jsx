// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./App.css";

import Homepage from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import Navbar from "./components/Navbar";

function App() {
  const currentPath = window.location.pathname;

  return (
    <Router>
      <Navbar
        homeActive={currentPath === "/"}
        shopActive={currentPath === "/shop"}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Optional: If the route doesn't match, redirect to the homepage */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
