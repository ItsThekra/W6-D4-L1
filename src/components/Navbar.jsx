import { Link } from "react-router-dom";

import "../assets/styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">أكاديمية طويق</h1>
        <nav className="navbar-links">
          <Link to="/">الرئيسية</Link>
          <Link to="/courses">الدورات</Link>
          <Link to="/about">من نحن</Link>
          <Link to="/contact">تواصل معنا</Link>
        </nav>
      </div>
    </header>
  );
}
