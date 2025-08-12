const { v4: uuidv4 } = require("uuid");
const Page = require("../Models /pageSchema"); // Adjust path as needed

const pages = ["Discover", "About", "Profile", "Settings"]; 

const body = [
  "Dive into the Discover page to explore new creators, trending hashtags, and communities you might love. From viral videos to hidden gems, this is where you’ll find fresh content and connect with people outside your current network.",
  "Our mission is to help you connect with people from around the world, share your favorite moments, and discover new ideas. Whether you’re here to make friends, grow your audience, or just stay inspired, this platform is designed to make every interaction meaningful.",
  "This is your personal space — your profile. Here you can showcase your posts, update your bio, customize your profile picture, and share highlights that represent who you are. Others can visit to learn more about you and see what you’ve been up to lately.",
  "Fine-tune your experience in the Settings page. Update your account details, manage privacy and security preferences, control notification settings, and customize how you interact with the platform so it feels just right for you.",
];

// this function serves to create the schemas that are used inside of the database, run once for dummy-data
// with the exception of the homepage, which is always "live" 
const createPageSchemas = async () => {
  try {
    // Check if pages already exist to avoid duplicates
    const existingPages = await Page.find({});
    if (existingPages.length > 0) {
      console.log("Pages already exist. Skipping creation.");
      return;
    }

    for (let i = 0; i < pages.length; i++) {
      const pageName = pages[i];
      const pageBody = body[i];

      // Generate 4 character unique ID for the slug
      const uniqueId = Math.random().toString(36).substring(2, 6).toUpperCase();

      // Create the page document with corresponding body content
      const pageData = {
        slug: `${pageName.toLowerCase()}-${uniqueId}`,
        title: pageName,
        body: pageBody, // Use the corresponding body content
        status: "under_construction", // set all statuses to under_construction, and changed 2 in the database to LIVE
      };

      const newPage = new Page(pageData);
      await newPage.save();

      console.log(`Created page: ${pageName} with slug: ${pageData.slug}`);
    }

    console.log("All pages created successfully!");
  } catch (error) {
    console.error("Error creating pages:", error);
  }
};

module.exports = { createPageSchemas };
