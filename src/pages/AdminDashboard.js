function AdminDashboard() {
    const logout = () => {
      localStorage.removeItem("admin");
      window.location.href = "/admin";
    };
  
    return (
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
  
        <div className="admin-cards">
          <div className="card">📊 Total Users: 120</div>
          <div className="card">📩 Messages: 34</div>
          <div className="card">🛠 Services: 6</div>
        </div>
  
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }
  
  export default AdminDashboard;
  