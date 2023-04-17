import React, { useState, useEffect } from "react";
import "./Dashboard.css";
function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  const handleUserClick = (user) => {};

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email} onClick={() => handleUserClick(user)}>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="dashboard-logout-btn" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}

export default Dashboard;
