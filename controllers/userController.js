const db = require("../models");

module.exports = {
    // Insert methods for User controller
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .populate("pets")
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        db.User
            .findById(req.params.id)
            .populate("pets")
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.json(err));
    }
};