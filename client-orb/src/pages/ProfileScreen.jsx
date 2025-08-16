import { usePage } from "../hooks/page";
import { useState, useEffect } from "react";

export function ProfileScreen() {
  let [pageInformation, setPage] = usePage(ProfileScreen.slug);
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
      <h1>Profile</h1>
      <p>{body || "loading body..."}</p>
    </div>
  );
}
ProfileScreen.title = "Profile";
ProfileScreen.slug = "profile-J26V";
