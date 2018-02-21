const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
    // validate: {
    //   validator: validator.isEmail,
    //   message: '{VALUE} is not a valid email'
    // }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet"
    }
  ]
});

  // // Before we create a new user we will hash 
  // // their password on the way into the database
  // User.beforeCreate(function (model, options) {
  //   return new Promise(function (resolve, reject) {
  //     bcrypt.hash(model.password, null, null, function (err, hash) {
  //       if (err) return reject(err);
  //       model.password = hash;
  //       return resolve(model, options);
  //     });
  //   });
  // });

var User = mongoose.model('User', UserSchema);

module.exports = User;