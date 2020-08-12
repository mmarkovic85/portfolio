/*
 * Client Router
 *
 * Setup for client-side react-router-dom
 */
const path = require("path");
const express = require("express");

const router = new express.Router();

/* 
 * If any other route is not triggered, this route will send index.html file,
 * client-side router will handle error 404
 */
router.get("*", (req, res) => {
  // Index.html file path
  const file_path = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "public",
    "index.html"
  );

  try {
    res
      // Send staus 200
      .status(200)
      // Send index.html file
      .sendFile(file_path);
  } catch (err) {
    // In case of error send status 500 and error message
    res.status(500).json({ error: "Internal Server Error" });
  };
});

module.exports = router;
