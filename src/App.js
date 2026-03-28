import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = () => {
  setSubmitted(true);

  const validEmails = [
    "vikram.singh@precisioncast.com",
    "rajesh.kumar@precisioncast.com",
    "priya.sharma@precisioncast.com"
  ];

  if (!email || !password) {
    setError("Please fill out all fields");
  } 
  else if (!validEmails.includes(email)) {
    setError("invalid");
  } 
  else {
    setError("");
    alert("Login Successful ✅");
  }
};

  return (
    <div className="container">

      {/* LEFT SIDE */}
      <div className="left">
        <div className="logo">
          <div className="logo-box">🏭</div>
          <div>
            <h1>Precision Cast Industries</h1>
            <p className="tagline">Excellence in Die Casting Since 1998</p>
          </div>
        </div>

        <div className="erp-section">
          <h2>🏭 Die Casting ERP System</h2>
          <p className="desc">
            Comprehensive enterprise resource planning for manufacturing excellence
          </p>

          <div className="features">
            <h3>Key Features:</h3>

            <div className="feature-card-single">
              <ul>
                <li>✔ Production Planning & Work Orders</li>
                <li>✔ Quality Control & NCR Management</li>
                <li>✔ AI-Powered Camera Detection</li>
                <li>✔ Real-time OEE Analytics</li>
                <li>✔ Procurement & Supplier Management</li>
                <li>✔ Sales & Customer Orders</li>
              </ul>
            </div>
          </div>

          <div className="footer-left">
            <p>Pune, Maharashtra, India</p>
            <p>GST: 27AABCP1234F1Z5</p>
            <p>Certifications: ISO 9001:2015, IATF 16949:2016</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="login-card">

          <h1 className="welcome">Welcome Back</h1>
          <p className="subtitle">Sign in to access your dashboard</p>

          {submitted && error === "invalid" && (
          <div className="top-error">
               <p><b>🚫 Invalid email or password. Please try again.</b></p>
               <p>Please use one of the demo accounts below or check your credentials.</p>

               <p><b>Valid Demo Accounts:</b></p>
            <ul>
             <li>Admin: vikram.singh@precisioncast.com</li>
             <li>Production: rajesh.kumar@precisioncast.com</li>
             <li>Quality: priya.sharma@precisioncast.com</li>
            </ul>
          </div>
         )}

          {/* EMAIL */}
          <label>Email Address</label>
          <div className="input-box">
            <span>👤</span>
            <input
              type="text"
              placeholder="name@precisioncast.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
          </div>

          {/* ERROR BOX (only on click) */}
          {submitted && error && (
            <div className="error-box">
              ⚠️ {error}
            </div>
          )}

          {/* PASSWORD */}
          <label>Password</label>
          <div className="input-box">
            <span>🔒</span>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>

          <div className="options">
            <label><input type="checkbox" /> Remember me</label>
            <span className="link">Forgot password?</span>
          </div>

          <button className="login-btn" onClick={handleLogin}>
            Sign In
          </button>

          <hr />

          <div className="demo-section">
            <p>Demo Credentials (Click to Login):</p>

            <div className="cred"><b>Admin</b><br/>vikram.singh@precisioncast.com</div>
            <div className="cred"><b>Production Manager</b><br/>rajesh.kumar@precisioncast.com</div>
            <div className="cred"><b>Quality Manager</b><br/>priya.sharma@precisioncast.com</div>
            <div className="cred"><b>Procurement Manager</b><br/>amit.patel@precisioncast.com</div>
            <div className="cred"><b>Sales Manager</b><br/>sneha.mehta@precisioncast.com</div>
          </div>

        </div>

        <div className="footer">
          © 2026 Precision Cast Industries Pvt. Ltd. All rights reserved.
        </div>
      </div>

    </div>
  );
}