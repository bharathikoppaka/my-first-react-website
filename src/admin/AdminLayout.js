import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../styles/admin.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
