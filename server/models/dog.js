const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create dog schema and attach it as a model to our database
const DogSchema = new Schema({
    name: String,
    weight: Number,
    color: String
});

//Mongoose automatically looks for the plural version of your model name,
//so a Dog model in Mongoose looks for 'dogs' in Mongo.

module.exports = mongoose.model('Dog', DogSchema);
