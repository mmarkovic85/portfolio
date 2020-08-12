/*
 * API Router
 *
 * API for React App
 */
const fs = require("fs");
const path = require("path");
const express = require("express");

const router = new express.Router();

// Route example
router.get("/info", async (req, res) => {
  // Package.json file path
  const file_path = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "package.json"
  );

  // Read package.json file
  fs.readFile(file_path, (err, data) => {
    try {
      if (err) throw err;

      // Extract info from package.json file 
      const { name, author, license } = JSON.parse(data);

      res
        // Send staus 200
        .status(200)
        // Send info
        .json({ name, author, license });
    } catch (err) {
      // In case of error send status 500 and error message
      res.status(500).json({ error: "Internal Server Error" });
    };
  });


});

module.exports = router;
