const db = require("../models");

module.exports = {
    // Insert methods for User controller
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.User
            .findById(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        const user = {
            _id: req.body._id,
            name: req.body.name
        }
    }
};