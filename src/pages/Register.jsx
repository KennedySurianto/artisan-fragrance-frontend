// src/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '', // Add password confirmation field
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    // Destructuring formData for easier access
    const { name, email, password, passwordConfirm } = formData;

    const handleChange = (e) => {
        // Use setFormData to update the specific field
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate that passwords match
        if (password !== passwordConfirm) {
            setMessage("Passwords do not match");
            return;
        }

        try {
            const registerResponse = await axios.post('http://localhost:5000/api/auth/register', formData);
            setMessage(registerResponse.data.message);
        } catch (error) {
            setMessage('Registration failed: ' + error.response.data.message);
        }
    };

    return (
        <div className='auth-container'>
            <div className='auth-box'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name" // Add name attribute
                        value={name}
                        onChange={handleChange} // Use handleChange
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="email" // Add name attribute
                        value={email}
                        onChange={handleChange} // Use handleChange
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        name="password" // Add name attribute
                        value={password}
                        onChange={handleChange} // Use handleChange
                        placeholder="Password"
                        required
                    />
                    <input
                        type="password"
                        name="passwordConfirm" // Add name attribute
                        value={passwordConfirm}
                        onChange={handleChange} // Use handleChange
                        placeholder="Password Confirmation"
                        required
                    />
                    {message && <p>{message}</p>} {/* Display the message */}
                    <button type="submit" className='button type1'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
