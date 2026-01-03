const Topbar = () => {
    return (
      <header className="topbar">
        <h3>Admin Panel</h3>
        <button
          onClick={() => {
            localStorage.removeItem("admin");
            window.location.href = "/admin";
          }}
        >
          Logout
        </button>
      </header>
    );
  };
  
  export default Topbar;
  