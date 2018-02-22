const router = require("express").Router();
const nytController = require("../../controllers/nytController");

// matches with "/api/pets"
router.route("/")
    .get(nytController.findAll)

module.exports = router;