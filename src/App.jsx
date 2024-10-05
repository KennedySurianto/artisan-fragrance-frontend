// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./App.css";

import Homepage from './pages/Home';
import Shop from "./pages/Shop";
import Login from './pages/Login';
import Register from './pages/Register';

import Navbar from "./components/Navbar";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check authentication status when the component mounts
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
        <Navbar
            currentPath={window.location.pathname}
            isAuthenticated={isAuthenticated}
            onLogout={handleLogout}
        />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            {/* Optional: If the route doesn't match, redirect to the homepage */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </Router>
    );
}

export default App;
