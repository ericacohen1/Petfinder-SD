const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 1
    },
    email:{
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
      }
    },
    password: {
      type: String,
      require: true,
      minlength: 6
    }
    // add pets to schema
});

var User = mongoose.model('User', UserSchema);

module.exports = {User};