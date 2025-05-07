import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./AuthPages.css";

const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateUsername = (uname) => {
    const hasNumber = /\d/.test(uname);
    const hasUppercase = /[A-Z]/.test(uname);
    return hasNumber && !hasUppercase;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateUsername(username)) {
      return setError("Username must contain at least one number and no uppercase letters.");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      setLoading(true);
      await signup(email, password, username); // <-- Adjust based on your actual implementation
      navigate("/");
    } catch (err) {
      setError("Signup failed: " + (err.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSignup}>
        <h2>Sign Up</h2>

        <input
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          required
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
      
        />

        <input
          type="password"
          placeholder="Create Password"
          required
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />

        <input
          type="password"
          placeholder="Confirm Password"
          required
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          
        />

        {error && <p className="error-msg">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        <p>
          Already have an account? <a href="/LoginPage">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
