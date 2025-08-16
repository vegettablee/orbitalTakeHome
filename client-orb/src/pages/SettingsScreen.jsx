import { usePage } from "../hooks/page";
import { useState, useEffect } from "react";

export function SettingsScreen() {
  let [pageInformation, setPage] = usePage(SettingsScreen.slug);
  let [body, setBody] = useState();

  // useEffect fetches the page information using the slug on the first render
  useEffect(() => {
    setPage();
  }, []);

  // once the page information is updated, set it to the body
  useEffect(() => {
    setBody(pageInformation[2]);
  }, [pageInformation]);
  return (
    <div style={{ padding: 24 }}>
      <h1>Settings</h1>
      <p>Adjust your preferences.</p>
    </div>
  );
}

SettingsScreen.title = "Settings";
SettingsScreen.slug = "settings-OT6A";
