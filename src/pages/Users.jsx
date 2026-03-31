import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Users() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />

        <div className="p-4">
          <h2>User Management</h2>
          <p>List of users will come here (API)</p>
        </div>
      </div>
    </div>
  );
}