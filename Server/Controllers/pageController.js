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
    let slugsInput = normalizeSlugs(slugs);

    console.log(slugsInput);
    const information = await pageService.getPageInformation(slugsInput);
    res.status(200).json(information);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving information", error });
  }
};

function normalizeSlugs(slugsInput) {
  if (!slugsInput) return [];

  // Already an array (e.g., slugs[]=a&slugs[]=b OR multiple ?slugs=a&slugs=b)
  if (Array.isArray(slugsInput)) {
    return slugsInput
      .flatMap((s) => String(s).split(","))
      .map((s) => s.trim())
      .filter(Boolean);
  }

  // Stringified JSON array (e.g., '["a","b"]' or "['a','b']")
  const raw = String(slugsInput).trim();
  if (raw.startsWith("[") && raw.endsWith("]")) {
    try {
      // Replace single quotes with double to be forgiving
      const parsed = JSON.parse(raw.replace(/'/g, '"'));
      return Array.isArray(parsed)
        ? parsed.map((s) => String(s).trim()).filter(Boolean)
        : [];
    } catch {
      // fall through to comma-split if JSON.parse fails
    }
  }

  // Comma-separated string (e.g., 'a,b,c')
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

module.exports = { getStatuses, getInformation };
