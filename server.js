// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
// // Dependencies
const bodyParser = require("body-parser");
// /* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8080;
const server = app.listen(port, () => {
  console.log(`Server running on localhost: ${port}`);
});

// POST Route
app.post("/postData", (req, res) => {
  projectData.currentDate = req.body.currentDate;
  projectData.temperature = req.body.temperature;
  projectData.contentOfFeelings = req.body.contentOfFeelings;
  res.send({ success: true });
});
// Get Rout
app.get("/getData", (req, res) => {
  res.send(projectData);
});
