import { usePage } from "../hooks/page";
import { useState, useEffect } from "react";

export function AboutScreen() {
  let [pageInformation, setPage] = usePage(AboutScreen.slug);
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
      <h1>About</h1>
      <p>{body || "Body is loading..."}</p>
    </div>
  );
}
AboutScreen.title = "About";
AboutScreen.slug = "about-13IU";
