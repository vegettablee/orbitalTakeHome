import { usePage } from "../hooks/page";
import { useState, useEffect } from "react";

export function DiscoverScreen() {
  let [pageInformation, setPage] = usePage(DiscoverScreen.slug);
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
      <h1>Discover</h1>
      <p>Explore new content here.</p>
    </div>
  );
}
DiscoverScreen.title = "Discover";
DiscoverScreen.slug = "discover-TCF2";
