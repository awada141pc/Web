// src/pages/ResetPassword.jsx
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await resetPassword(email);
      setMsg("Check your inbox for reset link");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="auth-container">
      <h2>Reset password</h2>
      {msg && <div className="msg">{msg}</div>}
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Send reset email</button>
      </form>
    </main>
  );
}
