// src/pages/FeedbackPage.js
import React, { useState } from "react";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFeedback("");
  };

  return (
    <div style={styles.container}>
      <h2>Give Us Feedback 💬</h2>
      {submitted ? (
        <p style={{ color: "green" }}>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <textarea
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback..."
            required
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textarea: {
    padding: "10px",
    marginBottom: "1rem",
    fontSize: "16px",
    resize: "vertical",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default FeedbackPage;

