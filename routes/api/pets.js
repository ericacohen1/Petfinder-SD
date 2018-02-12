const router = require("express").Router();
const articleController = require("../../controllers/petController");

router 
    .route("/")
    .get(petController.findAll)

module.exports = router;