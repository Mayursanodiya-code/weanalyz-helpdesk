import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewTicket from "./pages/NewTicket";
import MyTickets from "./pages/MyTickets";
import Dashboard from "./pages/Dashboard"; // Performance page
import TicketApproval from "./pages/TicketApproval";
import Sidebar from "./components/Sidebar"; // Custom sidebar with icons
import "./App.css"; // Optional: Global styles

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar with navigation */}
        <Sidebar />

        {/* Main content for page routing */}
        <main className="main-content">
          <Routes>
            <Route path="/new-ticket" element={<NewTicket />} />
            <Route path="/my-tickets" element={<MyTickets />} />
            <Route path="/performance" element={<Dashboard />} />
            <Route path="/ticket-approval" element={<TicketApproval />} />
            {/* Default route fallback */}
            <Route path="*" element={<NewTicket />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
