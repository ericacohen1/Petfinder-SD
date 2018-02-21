// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// var bcrypt = require("bcrypt-nodejs");
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

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
      pets: [{
        type: Schema.Types.ObjectId,
        ref: "Pet"
      }]
    });
  
UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


  

  // const UserSchema = new Schema({
  //   name: {
  //     type: String,
  //     required: true,
  //     minlength: 1
  //   },
  //   email: {
  //     type: String,
  //     required: true,
  //     trim: true,
  //     minlength: 1,
  //     unique: true
  //     // validate: {
  //     //   validator: validator.isEmail,
  //     //   message: '{VALUE} is not a valid email'
  //     // }
  //   },
  //   password: {
  //     type: String,
  //     require: true,
  //     minlength: 6
  //   },
  //   pets: [{
  //     type: Schema.Types.ObjectId,
  //     ref: "Pet"
  //   }]
  // });



  var User = mongoose.model('User', UserSchema);

  module.exports = User;