// controllers/pageController.js
const pageService = require("../Services/pageService");

// both of these are basic endpoints to return the statuses and page specific information, see the service file for more
// details
const getStatuses = async (req, res) => {
  try {
    const statuses = await pageService.getPageStatuses();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving statuses", error });
  }
};

const getInformation = async (req, res) => {
  try {
    let slugs = req.query.slugs; // Assuming slugs are passed in the request body
    console.log("Received slugs:", slugs);
    const information = await pageService.getPageInformation(slugs);
    res.status(200).json(information);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving information", error });
  }
};

module.exports = { getStatuses, getInformation };
