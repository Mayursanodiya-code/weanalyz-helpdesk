import React, { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    try {
      const data = localStorage.getItem("tickets");
      if (data) {
        setTickets(JSON.parse(data));
      }
    } catch (error) {
      console.error("Error parsing tickets from localStorage:", error);
      setTickets([]); // fallback in case of corrupt data
    }
  }, []); // ✅ run only once on mount

  // ✅ Count logic
  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "pending").length;
  const closed = tickets.filter((t) => t.status === "approved").length;

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Tickets</h3>
          <p>{total}</p>
        </div>
        <div className="card">
          <h3>Open Tickets</h3>
          <p>{open}</p>
        </div>
        <div className="card">
          <h3>Closed Tickets</h3>
          <p>{closed}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
