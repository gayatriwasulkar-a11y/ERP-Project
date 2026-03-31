import React from "react";
import "../styles/sidebar.css";
import { 
  FaTachometerAlt, FaUserCog, FaBoxOpen, FaShoppingBag,
  FaIndustry, FaClipboardCheck, FaFileInvoiceDollar,
  FaChartLine, FaCameraRetro
} from "react-icons/fa";

const sidebarItems = [
  { name: "Dashboard", icon: <FaTachometerAlt /> },
  { name: "User Management", icon: <FaUserCog /> },
  { name: "Items & BOM", icon: <FaBoxOpen /> },
  { name: "Procurement", icon: <FaShoppingBag /> },
  { name: "Production", icon: <FaIndustry /> },
  { name: "Quality Control", icon: <FaClipboardCheck /> },
  { name: "Sales & Orders", icon: <FaFileInvoiceDollar /> },
  { name: "Analytics & OEE", icon: <FaChartLine /> },
  { name: "Camera Detection", icon: <FaCameraRetro /> },
];

export default function Sidebar() {
  return (
    <div className="sidebar">

      {/* LOGO */}
      <div className="logo">
        <h5>Precision Cast</h5>
        <p className="sub-logo">ERP System</p>
      </div>

      {/* SIDEBAR MENU */}
      <ul className="menu">
        {sidebarItems.map((item, idx) => (
          <li key={idx}>
            <span className="icon">{item.icon}</span>
            <span className="text">{item.name}</span>
          </li>
        ))}
      </ul>

      {/* USER INFO */}
      <div className="user-box">
        <div className="avatar">VS</div>
        <div className="user-details">
          <b>Vikram Singh</b>
          <p>Admin</p>
        </div>
      </div>

      {/* LOGOUT BUTTON */}
      <button className="logout">Logout</button>
    </div>
  );
}