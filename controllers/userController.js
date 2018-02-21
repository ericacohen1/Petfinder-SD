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
    },
    login: function(req, res) {
        db.User
            .findOne({email: req.body.email})
            .then(dbUser => { 
                // console.log(req.body.password);
                // console.log(dbUser);
                // if(dbUser.password === req.body.password) {
                //     res.json(dbUser);
                // } else {
                //     res.status(400).json("Incorrect Password!");
                // }
                // res.json(true);

                dbUser.comparePassword(req.body.password, function(err, isMatch){
                    if(isMatch) {
                        res.json(dbUser);
                    } else {
                        res.status(400).json("Incorrect Password!");
                    }
                });
                
            })
            .catch(err => res.json(err));
    }
};