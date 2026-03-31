import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="dashboard d-flex">

      {/* SIDEBAR */}
      {sidebarOpen && <Sidebar />}

      {/* MAIN CONTENT */}
      <div className="main flex-grow-1">

        {/* HEADER */}
        <Header toggleSidebar={toggleSidebar} />

        {/* PAGE CONTENT */}
        <div className="content p-4">

          <h1><b>Welcome back, Vikram Singh!</b></h1>
          <p>Here's what's happening with your operations today.</p>

          <div className="cards d-flex flex-wrap gap-3 mt-4">

            {/* Card 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="card p-3 shadow-sm rounded">
              <h6>Total Active Users</h6>
              <h2>7</h2>
              <p>5 online now</p>
            </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="card p-3 shadow-sm rounded">
              <h6>System Uptime</h6>
              <h2>99.8%</h2>
              <p>Last 30 days</p>
            </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="card p-3 shadow-sm rounded">
              <h6>Work Orders</h6>
              <h2>42</h2>
              <p>6 active</p>
            </div>
            </div>

            {/* Card 4 */}
           <div className="col-lg-3 col-md-6">
              <div className="card p-3 shadow-sm rounded">
              <h6>OEE</h6>
              <h2>79.4%</h2>
              <p>Target: 85%</p>
            </div>
            </div>

             {/* Card 5 */}
            <div className="col-lg-3 col-md-6">
              <div className="card p-3 shadow-sm rounded">
              <h6>Open NCRs</h6>
              <h2>4</h2>
              <p>2 critical</p>
            </div>
            </div>

             {/* Card 6 */}
              <div className="col-lg-3 col-md-6">
              <div className="card p-3 shadow-sm rounded">
              <h6>Pending PO Approvals</h6>
              <h2>3</h2>
              <p>₹5.1L total</p>
            </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}