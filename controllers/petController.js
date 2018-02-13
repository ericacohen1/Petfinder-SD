const db = require("../models");

module.exports = {
    // Insert methods for Pet controller
    findAll: function (req, res) {
        db.Pet.find(req.query)
            // if any pets found, send pets to client
            .then(dbPet => res.json(dbPet))
            // If error, throw error to client
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Pet.create(req.body)
        .then(function(dbPet) {
            // If a new pet is successfully added, find the user and add to that user's 'pets' data
            return db.User.findByIdAndUpdate(req.body.userId, { $push: {pets: dbPet._id} }, {new: true});
        })
        .then(function(dbUser) {
            res.json(dbUser)
        })
        .catch(function(err) {
            // If an error, throw error to client
            res.json(err);
        });
    },
    populatePets: function (req, res) {
        // associate pet with a particular user
        db.User.findById(req.params.id)
            .populate("pets")
            .then(function(dbUser) {
                res.json(dbUser)
            })
            .catch(function(err) {
                res.json(err)
            });
    }
};