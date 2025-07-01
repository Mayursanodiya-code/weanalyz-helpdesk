import React, { useState, useEffect } from "react";
import "./MyTickets.css";

function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
  }, []);

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.ticketNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || ticket.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="tickets-container">
      <h2>My Tickets</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by Ticket No or Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>
      </div>

      {filteredTickets.length > 0 ? (
        <table className="tickets-table">
          <thead>
            <tr>
              <th>Ticket No</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.ticketNo}</td>
                <td>{ticket.name}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.department}</td>
                <td>
                  <span className={`status-badge ${ticket.status}`}>
                    {ticket.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data">No tickets found.</p>
      )}
    </div>
  );
}

export default MyTickets;
