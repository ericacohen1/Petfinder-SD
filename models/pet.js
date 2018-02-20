
const {Buffer} = require('buffer')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    // _UserId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "user"
    // },
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        require: true,
    },
    age: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        contentType: String
    },
    description: {
        type: String
    },
    contactInfo: {
        type: String
    }


});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;