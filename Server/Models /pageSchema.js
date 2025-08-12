const mongoose = require("mongoose");

// pageSchema used in MongoDB to store page information
// see createPageSchemas.js to see how this schema is used to create the initial pages

const pageSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["live", "under_construction"],
    default: "under_construction",
  },
});

const Page = mongoose.model("Page", pageSchema);

module.exports = Page;
