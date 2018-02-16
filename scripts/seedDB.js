const mongoose = require("mongoose");
const db = require("../models");
const axios = require("axios");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/petFinder");

const getAnimal = (animal, zip, amount, cb) => {
    let animals = [];
    let counter = 0;

    const url = 'http://api.petfinder.com/pet.getRandom';
    const apiKey = '2f95f51b181ddd27883e91878e922466';

    for (let i = 0; i < amount; i++) {

        // Within axios{...} is where we fill out our query 
        axios.get(url, {
            params: {
                key: apiKey,
                animal: animal,
                location: zip,
                output: "basic",
                format: "json"
            }
        }).then(res => {

            let flag = false;
            let breed = "";

            // Flag statements
            if (!res.data.petfinder.pet.name.hasOwnProperty('$t')) { flag = true; } // name
            if (!res.data.petfinder.pet.description.hasOwnProperty('$t')) { flag = true; } // description

            if (res.data.petfinder.pet.breeds.breed.length > 1) { // breed 2x+
                if (!res.data.petfinder.pet.breeds.breed[0].hasOwnProperty('$t')) { flag = true; }
                breed = res.data.petfinder.pet.breeds.breed[0].$t;
            } else { // breed 1x
                if (!res.data.petfinder.pet.breeds.breed.hasOwnProperty('$t')) { flag = true; }
                breed = res.data.petfinder.pet.breeds.breed.$t;
            }

            if (!res.data.petfinder.pet.age.hasOwnProperty('$t')) { flag = true; } // age

            if (!res.data.petfinder.pet.media.hasOwnProperty('photos')) { // image
                flag = true;
            } else { // image type
                if (res.data.petfinder.pet.media.photos.photo[2]['@size'] != 'x') { flag = true; }
            }

            if (!res.data.petfinder.pet.contact.email.hasOwnProperty('$t')) { flag = true; } // email

            // Creating animal if no flags
            if (!flag) {
                let animal = {
                    "name": res.data.petfinder.pet.name.$t,
                    "breed": breed,
                    "age": res.data.petfinder.pet.age.$t,
                    "description": res.data.petfinder.pet.description.$t,
                    "image": res.data.petfinder.pet.media.photos.photo[2].$t,
                    "email": res.data.petfinder.pet.contact.email.$t
                };
                animals.push(animal);
                // counter++;
            }

            counter++;

            if(counter === amount) {
                console.log(animals);
                cb(animals);
            }
        }).catch(err => console.log(err));
    }
}

// TEST
// Creating an initial array of cats, then linking thier id's to a single user, who gets pushed into the users collection
getAnimal("cat", "CA", 30, function(animalData){
    db.Pet.collection.insertMany(animalData).then(res => {
        let petIds = res.ops.map(animal => animal._id);

        const userInsert = {
            "name": "petFinderAPIcats",
            "email": "petFinderAPIcats@petFinder.com",
            "password": "petFinder1",
            "pets": petIds
        }

        db.User.create(userInsert).then(data => {
            console.log(data);
            process.exit(0);
        });
    })
});

// console.log("done");

// getAnimal("dog", "CA", 30, function(animalData){
//     db.Pet.collection.insertMany(animalData).then(res => {
//         let petIds = res.ops.map(animal => animal._id);

//         const userInsert = {
//             "name": "petFinderAPIdogs",
//             "email": "petFinderAPIdogs@petFinder.com",
//             "password": "petFinder2",
//             "pets": petIds
//         }

//         db.User.create(userInsert).then(data => {
//             console.log(data);
//             process.exit(0);
//         });
//     })
// });

// console.log("done");

// getAnimal("rabbit", "CA", 30, function(animalData){
//     db.Pet.collection.insertMany(animalData).then(res => {
//         let petIds = res.ops.map(animal => animal._id);

//         const userInsert = {
//             "name": "petFinderAPIrabbits",
//             "email": "petFinderAPIrabbits@petFinder.com",
//             "password": "petFinder3",
//             "pets": petIds
//         }

//         db.User.create(userInsert).then(data => {
//             console.log(data);
//             process.exit(0);
//         });
//     })
// });

// console.log("done");
