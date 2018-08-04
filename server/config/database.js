const path = require('path');
const fs = require('fs');
const modelsPath = path.join(__dirname, '../models');
const mongoose = require('mongoose');

//Required to remove depracation warning
mongoose.Promise = global.Promise;

//Create connection to database
mongoose.connect("mongodb://localhost/dog_db");

//Listen for connected event Log a message
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

fs.readdirSync(modelsPath).forEach(file => {
    if(file.indexOf('.js') > -1) {
        require(path.join(modelsPath, file));
    }
});
