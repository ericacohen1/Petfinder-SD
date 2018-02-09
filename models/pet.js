const mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
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
        type: String,

    }
    // add pets to schema
});

var Pet = mongoose.model('Pet', PetSchema);

module.exports = { Pet };