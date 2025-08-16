require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // <-- add this
const app = express();

const pageRoutes = require("./Server/Routes/pageRoutes");
const PORT = 3000;
const { createPageSchemas } = require("./Server/Services/createPageSchemas.js");

// Enable CORS for local frontend
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
// Routes
app.use("/pages", pageRoutes);

mongoose
  .connect(process.env.MONGO_CRED)
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => console.log("Server is listening on PORT: " + PORT));
  })
  .catch((err) => {
    console.log("Could not connect to database : " + err);
  });
