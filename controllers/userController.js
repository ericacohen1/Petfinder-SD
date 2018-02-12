const db = require("../models");

module.exports= {
    // insert methods for user controller
    findAll: function(req, res) {
        db.User
          .find(req.query)
          .then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
      }
};