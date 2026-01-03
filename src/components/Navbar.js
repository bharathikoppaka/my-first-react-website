import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      

      {/* MAIN NAVBAR */}
      <nav className="navbar">
        <div className="logo">Consultation</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-search">
          <input type="text" placeholder="Search" />
          <span className="search-icon">🔍</span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

