import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const validEmails = [
    "Admin: vikram.singh@precisioncast.com",
    "Production: rajesh.kumar@precisioncast.com",
    "Quality: priya.sharma@precisioncast.com",
  ];

  // actual email list for validation
  const validEmailList = [
    "vikram.singh@precisioncast.com",
    "rajesh.kumar@precisioncast.com",
    "priya.sharma@precisioncast.com",
  ];

  const handleLogin = () => {
    setSubmitted(true);

    if (!email || !password) {
      setError("Please fill out all fields");
    } else if (!validEmailList.includes(email)) {
      setError("invalid");
    } else {
      setError("");
      alert("Login Successful ✅");
      navigate("/dashboard"); 
      setEmail("");
      setPassword("");
      setSubmitted(false);
    }
  };

  return (
    <div className="container">

      {/* LEFT SIDE */}
      <div className="left">
        <div className="logo">
          <div className="logo-box">🏭</div>
          <div> <h1><b>Precision Cast Industries</b></h1>
            <h6 className="tagline">
              Excellence in Die Casting Since 1998
              </h6>
          </div>
        </div>

        <div className="erp-section">
          <h2>🏭 Die Casting ERP System</h2>
          <p className="desc">
            Comprehensive enterprise resource planning for manufacturing excellence
          </p>

            <div className="feature-card-single">
              <div className="features">
                  <h5>Key Features:</h5>
              <ul>
                <li>✓ Production Planning & Work Orders</li>
                <li>✓ Quality Control & NCR Management</li>
                <li>✓ AI-Powered Camera Detection</li>
                <li>✓ Real-time OEE Analytics</li>
                <li>✓ Procurement & Supplier Management</li>
                <li>✓ Sales & Customer Orders</li>
              </ul>
            </div>
          </div>

          <div className="footer-left">
            <p>Pune, Maharashtra, India <br/>GST: 27AABCP1234F1Z5<br/>
            <br/>Certifications: ISO 9001:2015, IATF 16949:2016</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="login-card">

          <h1 className="welcome">Welcome Back</h1>
          <p className="subtitle">Sign in to access your dashboard</p>

    
          <div className="demo-alert">
         
          <div className="demo-text">
            <strong>Demo System:</strong> Use the demo accounts below or scroll down
             to click "Quick Login" buttons.
          </div>
         </div>
        
          {/* 🔴 SHOW ONLY WHEN INVALID */}
          {submitted && error === "invalid" && (
            <div className="top-error">
              <p className="error-title">
                🚫 Invalid email or password. Please try again.
              </p>

              <p className="error-subtext">
                Please use one of the demo accounts below or check your credentials.
              </p>

              <div className="demo-box">
                <p className="demo-title">Valid Demo Accounts:</p>

                <ul>
                  {validEmails.map((mail, index) => (
                    <li key={index}>{mail}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* EMAIL */}
          <label>Email Address</label>
          <div className="input-box">
            <span>👤</span>
            <input
              type="email"
              placeholder="name@precisioncast.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
          </div>

          {/* ⚠️ ERROR */}
          {submitted && error && error !== "invalid" && (
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

          {/* Demo Accounts */}
          <div className="demo-section">
            <p>Demo Credentials (Click to Login):</p>

            <div className="cred"
                 style={{ cursor: "pointer" }}
                 onClick={() => navigate("/Dashboard")}
            >
               <b>Admin</b><br/>
               vikram.singh@precisioncast.com
               </div>
            <div className="cred"><b>Production</b><br/>rajesh.kumar@precisioncast.com</div>
            <div className="cred"><b>Quality</b><br/>priya.sharma@precisioncast.com</div>
            <div className="cred"><b>Procurement</b><br/>amit.patel@precisioncast.com</div>
            <div className="cred"><b>Sales</b><br/>sneha.mehta@precisioncast.com</div>
          </div>

        </div>

        <div className="footer">
          © 2026 Precision Cast Industries Pvt. Ltd. All rights reserved.
        </div>
      </div>

    </div>
  );
}