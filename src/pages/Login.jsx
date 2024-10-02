// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./LoginRegister.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('authToken', response.data.token);  // Storing token after login
            setMessage(response.data.message);
            navigate('/');
        } catch (error) {
            console.error('Login failed', error);
            // Set error message if login fails
            if (error.response && error.response.data) {
                setMessage('Login failed: ' + error.response.data.message);
            } else {
                setMessage('Login failed: An unexpected error occurred.');
            }
        }
    };

    return (
        <div className='auth-container'>
            <div className='auth-box'>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    {message && <p>{message}</p>} {/* Display the message */}
                    <button type="submit" className='button type1'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
