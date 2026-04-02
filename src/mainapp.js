import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";


export default function Mainapp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const validEmails = [
    "Admin: vikram.singh@precisioncast.com",
    "Production: rajesh.kumar@precisioncast.com",
    "Quality: priya.sharma@precisioncast.com",
  ];

  const validEmailList = [
    "vikram.singh@precisioncast.com",
    "rajesh.kumar@precisioncast.com",
    "priya.sharma@precisioncast.com",
  ];

  const handleLogin = () => {
    setSubmitted(true);

    if (!email || !password) {
      setError("⚠️Please fill out all fields");
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
    <div className="container-fluid min-vh-100 text-white">
  <div className="row">
        {/* LEFT SIDE */}
        <div className="col-md-6 d-flex flex-column justify-content-start p-5" style={{marginTop: 200, padding: '6rem 5rem' }}>
          <div className="d-flex align-items-center mb-4">
            <div className="bg-white text-primary rounded-3 d-flex justify-content-center align-items-center" style={{ width: 60, height: 60, fontSize: 32 }}>
              🏭
            </div>
            <div className="ms-3">
              <h1 className="mb-1" style={{ fontSize: 28 }}>Precision Cast Industries</h1>
              <p className="tagline" style={{ color: '#e0e7ff' }}>
                 Excellence in Die Casting Since 1998</p>
            </div>
          </div>

          <h2 className="d-flex align-items-center mb-2" style={{ fontSize: 22 }}>🏭 Die Casting ERP System</h2>
          <p className="mb-3" style={{ maxWidth: 500, fontSize: 16, color: "#e0e7ff" }}>
            Comprehensive enterprise resource planning for manufacturing excellence
          </p>

          <div className="col-md-7 text-white p-3 rounded mb-3" style={{ maxWidth: 500 }}>
            <strong>Key Features:</strong>
            <ul className="mb-0" style={{fontSize: 15}}>
              <p>✓ Planning & Work Orders</p>
              <p>✓ Quality Control & NCR Management</p>
              <p>✓ AI-Powered Camera Detection</p>
              <p>✓ Real-time OEE Analytics</p>
              <p>✓ Procurement & Supplier Management</p>
              <p>✓ Sales & Customer Orders</p>
            </ul>
          </div>

          <p className="small mt-3" style={{ maxWidth: 500 }}>
            Pune, Maharashtra, India <br/>
            GST: 27AABCP1234F1Z5<br/><br/>
            Certifications: ISO 9001:2015, IATF 16949:2016
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-5">
          <div className="card shadow-lg p-4 rounded" style={{ width: 450 }}>
            <h1 className="fw-bold mb-1" style={{ fontSize: 26, color: "#0f172a" }}>Welcome Back</h1>
            <p className="mb-3 text-secondary" style={{ fontSize: 17 }}>Sign in to access your dashboard</p>

            {/* Demo alert */}
            <div className="bg-light border p-2 rounded mb-3 text-primary small">
              <strong>Demo System:</strong> Use the demo accounts below or scroll down to click "Quick Login" buttons.
            </div>

            {submitted && error === "invalid" && (
              <div className="bg-danger bg-opacity-25 border border-danger rounded p-2 mb-3">
                <p className="text-danger fw-bold mb-1">🚫 Invalid email or password. Please try again.</p>
                <p className="small mb-2">Please use one of the demo accounts below or check your credentials.</p>
                <ul className="mb-0">
                  {validEmails.map((mail, index) => (
                    <li key={index} className="small">{mail}</li>
                  ))}
                </ul>
              </div>
            )}

            <label>Email Address</label>
            <div className="input-group mb-3">
              <span className="input-group-text">👤</span>
              <input
                type="email"
                className="form-control"
                placeholder="name@precisioncast.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
              />
            </div>

            {submitted && error && error !== "invalid" && (
              <div className="alert alert-dark py-1">{error}</div>
            )}

            <label>Password</label>
            <div className="input-group mb-3">
              <span className="input-group-text">🔒</span>
              <input
                type="password"
                className="form-control"
                placeholder="********"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
              />
            </div>

            <div className="d-flex justify-content-between mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Remember me</label>
              </div>
              <span className="text-primary" style={{ cursor: "pointer" }}>Forgot password?</span>
            </div>

            <button className="btn btn-primary w-100 mb-3" style={{background: "#0436a3"}} onClick={handleLogin}>Sign In</button>

            <hr />

            {/* Demo accounts */}
            <p className="mb-1">Demo Credentials (Click to Login):</p>
            <div className="d-grid gap-2 ">
              <button className="btn btn-light text-start" style={{fontSize: "9"}} onClick={() => navigate("/dashboard")}>
                <b>Admin</b> <br /> vikram.singh@precisioncast.com
              </button>
              <button className="btn btn-light text-start" style={{fontSize: "9"}}><b>Production</b><br/>rajesh.kumar@precisioncast.com</button>
              <button className="btn btn-light text-start" style={{fontSize: "9"}}><b>Quality</b><br/>priya.sharma@precisioncast.com</button>
              <button className="btn btn-light text-start" style={{fontSize: "9"}}><b>Procurement</b><br/>amit.patel@precisioncast.com</button>
              <button className="btn btn-light text-start" style={{fontSize: "9"}}><b>Sales</b><br/>sneha.mehta@precisioncast.com</button>
            </div>
          </div>

          <footer className="mt-4 text-white text-center">
            © 2026 Precision Cast Industries Pvt. Ltd. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}