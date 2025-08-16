import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

export function Navbar() {
  const linkStyle = ({ isActive }) => ({
    padding: "8px 12px",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: 600,
    background: isActive ? "rgba(0,0,0,0.08)" : "transparent",
  });

  return (
    <nav
      style={{
        display: "flex",
        gap: 12,
        padding: 12,
        borderBottom: "1px solid #eee",
      }}
    >
      <NavLink to="/" style={linkStyle} end>
        Home
      </NavLink>
      <NavLink to="/discover" style={linkStyle}>
        Discover
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
      <NavLink to="/profile" style={linkStyle}>
        Profile
      </NavLink>
      <NavLink to="/settings" style={linkStyle}>
        Settings
      </NavLink>
    </nav>
  );
}
