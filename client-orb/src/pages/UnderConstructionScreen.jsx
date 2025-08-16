import React from "react";

export function UnderConstructionScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚧 Under Construction 🚧</h1>
      <p style={styles.text}>
        We’re working hard to bring you something amazing.
      </p>
      <p style={styles.text}>Check back soon!</p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "1.2rem",
    color: "#555",
    margin: "0.25rem 0",
  },
};
