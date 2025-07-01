import React, { useState } from "react";
import "./NewTicket.css";

function NewTicket() {
  const [formData, setFormData] = useState({
    ticketNo: "",
    date: "",
    name: "",
    department: "",
    subject: "",
    category: "",
    description: "",
    type: "",
    priority: "",
    verified: false, // 👈 new checkbox field
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: Date.now(),
      ...formData,
      status: "pending",
    };

    const existingTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const updatedTickets = [...existingTickets, newTicket];
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));

    alert("Ticket Submitted Successfully!");

    setFormData({
      ticketNo: "",
      date: "",
      name: "",
      department: "",
      subject: "",
      category: "",
      description: "",
      type: "",
      priority: "",
      verified: false,
    });
  };

  return (
    <div className="ticket-container">
      <h2 className="ticket-title">Create New Ticket</h2>
      <form className="ticket-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Ticket No</label>
            <input
              name="ticketNo"
              value={formData.ticketNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group full-width">
            <label>Subject</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <input name="type" value={formData.type} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Priority</label>
            <input
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            />
          </div>
          <div className="form-group full-width">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        {/* ✅ Modern Checkbox */}
        <div className="form-group checkbox-group full-width">
          <label className="robot-checkbox">
            <input
              type="checkbox"
              name="verified"
              checked={formData.verified}
              onChange={handleChange}
              required
            />
            <span className="checkmark"></span>
            I'm not a robot
          </label>
        </div>

        <div className="submit-btn-row">
          <button
            type="submit"
            className="submit-button"
            disabled={!formData.verified} // ❌ disable if not ticked
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTicket;
