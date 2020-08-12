/*
 * Express App setup file
 */
const path = require("path");
const express = require("express");
const apiRouter = require("./routers/api");
const clientRouter = require("./routers/client");

const app = express();
const public_dir_path = path.join(__dirname, "../../public");

// setup static directory path
app.use(express.static(public_dir_path));

// Use API ruter
app.use("/api", apiRouter);
// Use React router
app.use(clientRouter);

module.exports = app;
