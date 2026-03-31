import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Production from "./pages/Production";
import Procurement from "./pages/Procurement";

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/production" element={<Production />} />
        <Route path="/procurement" element={<Procurement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainApp;