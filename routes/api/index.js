const router = require("express").Router();
const petRoutes = require("./pets");
const userRoutes = require("./users");

router.use("/pets", petRoutes);
router.use("/users", userRoutes);

module.exports = router;