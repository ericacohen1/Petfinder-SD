const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

var User = mongoose.model('User', UserSchema);

module.exports = User;