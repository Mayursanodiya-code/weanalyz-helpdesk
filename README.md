# WeAnalyz Helpdesk App 🚀

A modern Helpdesk Ticketing UI built using **ReactJS**, closely following the provided Figma design.

---

## 🔗 Live Demo

👉 [View Hosted App on Netlify](https://weanalyz-helpdesk.netlify.app)

---

## 📝 Features

- 🎨 Responsive UI that mirrors the Figma mockup  
- 🆕 Create New Ticket with validation and animated "I'm not a robot" checkbox  
- 📋 View submitted tickets in **My Tickets**, with **search** and **filter by status**  
- ✅ **Ticket Approval** page for managing pending tickets (Approve/Reject)  
- 📊 **Dashboard** showing real-time ticket stats (Total, Open, Closed)  
- 💾 Uses **LocalStorage** as a mock backend for data persistence  

---

## 🛠️ Tech Stack

- **ReactJS** (functional components with hooks)  
- **React Router** for client-side navigation  
- **Plain CSS** modules/stylesheets  
- **react-icons** for consistent iconography  
- **LocalStorage** to simulate backend  
- **Netlify** for easy deployment and hosting  

---

## 📁 Project Structure
weanalyz-helpdesk/
├── public/
│ ├── index.html
│ └── _redirects ← Netlify rewrite for deep-link routing
├── src/
│ ├── pages/
│ │ ├── Dashboard.jsx
│ │ ├── NewTicket.jsx
│ │ ├── MyTickets.jsx
│ │ └── TicketApproval.jsx
│ ├── components/
│ │ └── Sidebar.jsx
│ ├── App.jsx
│ ├── index.js
│ └── styles (CSS files)
├── .gitattributes
├── .gitignore
├── package.json
└── README.md

