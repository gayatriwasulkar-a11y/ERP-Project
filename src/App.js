import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App.jsx";  
import Dashboard from "./pages/dashboard.jsx";  

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      
        <Route path="/dashboard" element={<Dashboard />} />
     
      </Routes>
    
    </BrowserRouter>
  );
}

export default MainApp;