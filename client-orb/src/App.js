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
import { UnderConstructionScreen } from "./pages/UnderConstructionScreen";

import { useState, useEffect } from "react";
import { NetworkAPI } from "./services/network";

export default function App() {
  let [livePages, setLivePages] = useState([]); // this is used to keep track of current pages

  useEffect(() => {
    // returns as [title, slug, status], this serves to filter the active pages from the network call
    // it returns the array of only active pages
    let networkAPI = new NetworkAPI();
    networkAPI.fetchPageStatuses().then((statuses) => {
      let live = statuses.filter((status) => {
        if (status[2] === "LIVE") {
          return true;
        } else {
          return false;
        }
      });
      console.log(live);
      setLivePages(live);
    });
  }, []);

  const isLive = (title) => {
    // this checks the livePages array and puts it into a set, and if the title being passed through matches
    // inside of this set, return true. every other case gets returned false, and it is used as a placeholder for a
    // normal loading screen if the content hasn't been fetched fron the database yet
    if (livePages.empty) {
      return false;
    } else {
      let liveTitles = livePages.map((status) => [status[0]]);
      liveTitles = liveTitles.flat();
      console.log(liveTitles);
      let live = new Set(liveTitles);
      if (live.has(title)) {
        return true;
      }
      return false;
    }
  };
  // the routing here is self-explanatory, the nav bar goes at the top to link to the other pages through navigation
  //  each page before it is rendered is run with the function isLive, if this returns true, load the original screen
  // if not, load the under_construction page. this is with all pages with the exception of the home page
  return (
    <Router>
      <Navbar />
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/discover"
            element={
              isLive(DiscoverScreen.title) ? (
                <DiscoverScreen />
              ) : (
                <UnderConstructionScreen />
              )
            }
          />
          <Route
            path="/about"
            element={
              isLive(AboutScreen.title) ? (
                <AboutScreen />
              ) : (
                <UnderConstructionScreen />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isLive(ProfileScreen.title) ? (
                <ProfileScreen />
              ) : (
                <UnderConstructionScreen />
              )
            }
          />
          <Route
            path="/settings"
            element={
              isLive(SettingsScreen.title) ? (
                <SettingsScreen />
              ) : (
                <UnderConstructionScreen />
              )
            }
          />
        </Routes>
      </main>
    </Router>
  );
}
