import React, { useEffect, useState } from "react";
import "./TicketApproval.css";

function TicketApproval() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const allTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const pendingTickets = allTickets.filter((t) => t.status === "pending");
    setTickets(pendingTickets);
  }, []);

  const handleAction = (id, action) => {
    const allTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const updated = allTickets.map((ticket) =>
      ticket.id === id ? { ...ticket, status: action } : ticket
    );
    localStorage.setItem("tickets", JSON.stringify(updated));
    setTickets(updated.filter((t) => t.status === "pending"));
  };

  return (
    <div className="approval-container">
      <h2>Ticket Approval</h2>
      {tickets.length === 0 ? (
        <p className="no-tickets">🎉 No pending tickets!</p>
      ) : (
        <div className="ticket-list">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <p>
                <strong>Subject:</strong> {ticket.subject}
              </p>
              <p>
                <strong>Name:</strong> {ticket.name}
              </p>
              <p>
                <strong>Department:</strong> {ticket.department}
              </p>
              <p>
                <strong>Date:</strong> {ticket.date}
              </p>
              <div className="btn-group">
                <button
                  onClick={() => handleAction(ticket.id, "approved")}
                  className="approve"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(ticket.id, "rejected")}
                  className="reject"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TicketApproval;
