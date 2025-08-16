import React from "react";

export function HomeScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🏠 Welcome Home</h1>
      <p style={styles.subtitle}>
        This is your basic home page. You can add content here later.
      </p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    maxWidth: "600px",
  },
};
