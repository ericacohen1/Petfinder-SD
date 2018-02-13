const router = require("express").Router();
const userController = require("../../controllers/petController");

// matches with /api/users
router.route("/:id")
    .get(userController.findById)
    .put(userConroller.update)