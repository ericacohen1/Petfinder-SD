const db = require("../models");

module.exports= {
    // insert methods for Pet controller
    findAll: function(req, res) {
        db.Pet
          .find(req.query)
          .then(dbPet => res.json(dbPet))
          .catch(err => res.status(422).json(err));
      }
};