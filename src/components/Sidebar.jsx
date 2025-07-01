import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaTicketAlt,
  FaClipboardCheck,
  FaChartBar,
  FaListAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Helpdesk</h2>
      <ul>
        <li>
          <NavLink
            to="/new-ticket"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaTicketAlt className="icon" /> New Ticket
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ticket-approval"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaClipboardCheck className="icon" /> Ticket Approval
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-tickets"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaListAlt className="icon" /> My Tickets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/performance"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaChartBar className="icon" /> Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
