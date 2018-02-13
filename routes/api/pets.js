const router = require("express").Router();
const petController = require("../../controllers/petController");

// matches with "/api/pets"
router.route("/")
    .get(petController.findAll)
    .post(petController.create);

// matches with "/api/pets"
router.route("/:id")
    .get(petController.populatePets)

module.exports = router;