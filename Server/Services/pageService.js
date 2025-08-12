const Page = require("../Models /pageSchema"); // Adjust path as needed

// returns the statuses of all pages, as well as the title and slug
const getPageStatuses = async () => {
  try {
    // Get all pages and select only title, slug, and status fields
    const pages = await Page.find({}, { title: 1, slug: 1, status: 1, _id: 0 });

    // Transform to array of arrays: [title, slug, status]
    return pages.map((page) => [page.title, page.slug, page.status]);
  } catch (error) {
    console.error("Error fetching page statuses:", error);
    throw error;
  }
};

// getPage takes an array of slugs and returns the correponding page information(title, body)
const getPageInformation = async (slugs) => {
  try {
    // Find pages where slug is in the provided slugs array
    const pages = await Page.find(
      { slug: { $in: slugs } },
      { slug: 1, title: 1, body: 1, _id: 0 }
    );

    // Transform to array of arrays: [slug, title, body]
    return pages.map((page) => [page.slug, page.title, page.body]);
  } catch (error) {
    console.error("Error fetching page information:", error);
    throw error;
  }
};

// had an issue with the client requests, so i added validation to fix it
const normalizeSlugs = (slugsInput) => {
  if (!slugsInput) return [];
  if (Array.isArray(slugsInput)) {
    // Handles ['a', 'b,c'] -> ['a','b','c']
    return slugsInput
      .flatMap((s) => String(s).split(","))
      .map((s) => s.trim())
      .filter(Boolean);
  }
  // Handles "a,b,c" or "a"
  return String(slugsInput)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
};

module.exports = {
  getPageStatuses,
  getPageInformation,
};
