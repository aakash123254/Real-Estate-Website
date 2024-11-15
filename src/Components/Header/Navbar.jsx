import React, { useState } from "react";
import { Link } from "react-scroll";
import Login from "../Login";
export default function Navbar({ onLoginClick }) {
  const [menu, setMenu] = useState(true);
  const [showLogin, setShowLogin] = useState(false); // Track login state in Navbar

  const showMenu = () => {
    setMenu(!menu);
  };

  const handleLoginSubmit = () => {
    setShowLogin(false); // Hide login page
  };

  return (
    <nav>
      <div className="logo">
        <a href="#!">Evero</a>
      </div>
      <div className={menu ? "nav-links" : "nav-links show"}>
        <div className="nav-link">
          <Link
            to="header"
            spy={true}
            smooth={true}
            duration={600}
            delay={400}
            onClick={() => showMenu()}
          >
            Home
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={1600}
            delay={300}
            onClick={() => showMenu()}
          >
            About
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="apartments"
            spy={true}
            smooth={true}
            duration={1600}
            delay={300}
            onClick={() => showMenu()}
          >
            Apartments
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="works"
            spy={true}
            smooth={true}
            duration={1600}
            delay={300}
            onClick={() => showMenu()}
          >
            How It Works
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="agents"
            spy={true}
            smooth={true}
            duration={1600}
            delay={300}
            onClick={() => showMenu()}
          >
            Agents
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            duration={1600}
            delay={300}
            onClick={() => showMenu()}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className={menu ? "action-links" : "action-links action"}>
        <button onClick={onLoginClick} className="login-toggle-button">
          Login
        </button>
		
        <button>Get Started</button>
      </div>
      <div className={menu ? "toggler" : "toggler close"} onClick={showMenu}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      {/* Conditionally render the Login component */}
      {showLogin && <Login onLoginSubmit={handleLoginSubmit} />}
    </nav>
  );
}
