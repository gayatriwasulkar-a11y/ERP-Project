import React, { useState } from "react";
import { Navbar, Form, FormControl, Dropdown, Button } from "react-bootstrap";
import { FaBars, FaBell } from "react-icons/fa";

function Header({ toggleSidebar }) {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    "New order received",
    "Production report ready",
    "Quality check pending",
  ];

  const userOptions = ["Profile", "Settings", "Logout"];

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="px-4 py-2 shadow-sm"
      style={{ height: "70px", borderBottom: "1px solid #e0e0e0" }}
    >
      {/* LEFT: Hamburger */}
      <Button
        variant="light"
        onClick={toggleSidebar}
        className="d-flex align-items-center justify-content-center me-3"
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        <FaBars />
      </Button>

      {/* CENTER: Search + Notification */}
      <Form className="mx-3 flex-grow-1 d-flex align-items-center">
        <FormControl
          type="search"
          placeholder="Search..."
          className="me-2"
          style={{
            borderRadius: "12px",
            height: "45px",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
          }}
        />
        <Dropdown
          show={showNotifications}
          onToggle={() => setShowNotifications(!showNotifications)}
          className="ms-2"
        >
          <Dropdown.Toggle
            variant="light"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            <FaBell />
          </Dropdown.Toggle>

          <Dropdown.Menu align="end">
            {notifications.map((note, idx) => (
              <Dropdown.Item key={idx}>{note}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form>

      {/* RIGHT: Admin User */}
      <Dropdown align="end">
        <Dropdown.Toggle
          variant="light"
          style={{
            height: "45px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            padding: "0 15px",
          }}
        >
          Admin User
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {userOptions.map((option, idx) => (
            <Dropdown.Item key={idx}>{option}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
}

export default Header;