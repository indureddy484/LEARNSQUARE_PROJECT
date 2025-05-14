import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./AuthPages.css"; // Reusing the same styles as login

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth(); // Same login function will be used
  const navigate = useNavigate();

  const handleSignup = async (e) => {
  e.preventDefault();

  if (!email || !username || !password || !confirmPassword) {
    return setError("All fields are required");
  }

  if (password !== confirmPassword) {
    return setError("Passwords do not match");
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, username, password })
    });

    const data = await res.json();

    if (!res.ok) {
      if (data.error === "User already exists") {
        return setError("This user already exists. Please log in instead.");
      } else {
        return setError(data.error || "Signup failed");
      }
    }

    login({ email, username });
    alert("Signup successful!");
    navigate("/");
  } catch (err) {
    setError("Something went wrong. Please try again.");
  }
};

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create a New Account</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
