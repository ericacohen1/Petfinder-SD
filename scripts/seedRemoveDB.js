const mongoose = require("mongoose");
const db = require("../models");
const axios = require("axios");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/petFinder");


removeAll = () => {
    db.Pet.collection.remove();
    db.User.collection.remove();
}

removeAll();
