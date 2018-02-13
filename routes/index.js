const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// Send every request to the React app
// Define any API routes before this runs
router.use((req, res) =>
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
  );

module.exports = router;