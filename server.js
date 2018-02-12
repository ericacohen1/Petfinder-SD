const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

const user = require('./controllers/user');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/petFinderTest",
  {
    useMongoClient: true
  }
);


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


module.exports = {
  app
};