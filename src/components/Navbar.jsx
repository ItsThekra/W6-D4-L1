import { Link } from "react-router-dom";

import "../assets/styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">أكاديمية طويق</h1>
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact with Us</Link>
        </nav>
      </div>
    </header>
  );
}
