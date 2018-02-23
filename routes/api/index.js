const router = require("express").Router();
const petRoutes = require("./pets");
const userRoutes = require("./users");
const nytRoutes = require("./nyt");

router.use("/pets", petRoutes);
router.use("/users", userRoutes);
router.use("/nyt", nytRoutes);

module.exports = router;