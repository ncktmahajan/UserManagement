import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; 

const Login = ({ setAuthToken }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://reqres.in/api/login",
                { email, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            localStorage.setItem("token", response.data.token);
            setAuthToken(response.data.token);
        } catch (err) {
            console.log(err);
            setError("Invalid credentials");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="input-container">
                    <label>Email *</label>
                    <div className="input-icon">
                        <i className="fas fa-user"></i>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="yourmail@website.com"
                            required
                        />
                    </div>
                </div>
                <div className="input-container">
                    <label>Password *</label>
                    <div className="input-icon">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                </div>
                <button type="submit">LOGIN</button>
                {error && <p className="error-text">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
