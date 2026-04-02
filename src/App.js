import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainapp from "./mainapp.js";  
import Dashboard from "./pages/dashboard.jsx";  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainapp />} />
      
        <Route path="/dashboard" element={<Dashboard />} />
     
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;