// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css"; // optional if you want to style
import logo from "./logo.svg"; // optional if you keep the default CRA logo
import { Navbar } from "./components/navBar";
import { AboutScreen } from "./pages/AboutScreen";
import { DiscoverScreen } from "./pages/DiscoverScreen";
import { HomeScreen } from "./pages/HomeScreen";
import { ProfileScreen } from "./pages/ProfileScreen";
import { SettingsScreen } from "./pages/SettingsScreen";

// Simple top navigation

// Page components (keep them here for simplicity)

function NotFound() {
  return (
    <div style={{ padding: 24 }}>
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  );
}

export default function App() {
  let [livePages, setLivePages] = useState([]);

  return (
    <Router>
      <Navbar />
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/discover" element={<DiscoverScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}
