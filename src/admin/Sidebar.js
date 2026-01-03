import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">MyAdmin</div>

      <nav>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/category">Category</NavLink>
        <NavLink to="/admin/location">Location</NavLink>
        <NavLink to="/admin/products">Products</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
