const express = require("express");
const {
  getStatuses,
  getInformation,
} = require("../controllers/pageController");
const router = express.Router();

// Route definitions using the controller functions
router.get("/statuses", getStatuses);
router.get("/information", getInformation);

module.exports = router;
