import React from "react";
import "./NavBar.scss";
import logo from "../../logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Edinburgh Tour" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Walks
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            Foods
          </a>
        </li>
      </ul>
    </nav>
  );
}