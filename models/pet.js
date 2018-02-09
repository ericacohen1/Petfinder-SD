const mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
    _UserId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        require: true,
    },
    age: {
        type: integer,
        required: true,
    },
    bio: {
        type: String
    }
 
});

var Pet = mongoose.model('Pet', PetSchema);

module.exports = { Pet };