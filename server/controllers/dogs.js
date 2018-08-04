const mongoose = require('mongoose');
const Dog = require('../models/dog');
mongoose.Promise = global.Promise;
module.exports = {
    index: (request, response) => {
        Dog.find({}, request.body)
            .then(dogs => {
                response.render('index', { dogs});
            })
            .catch(console.log("error index"));
    },

    show: (request, response) => {
        Dog.findById(request.body)
            .then(dog => {
                response.render('dogs/show', { dogs: dog });
            })
            .catch(console.log("error show"));
    },
    edit: (request, response) => {
        Dog.findById(request.params._id)
            .then(dog => {
                response.render('dogs/show', { dogs: dog });
            })
            .catch(console.log("error edit"));
    },

    create: (request, response) => {
        Dog.create(request.body)
            .then(dog => {
                response.redirect('/');
            })
            .catch(console.log("error create"));
    },

    new: (request, response) => {
        response.render('dogs/new');
    },

    update: (request, response) => {
        Dog.findByIdAndUpdate(request.params._id, request.body)
            .then(dog => {
                response.redirect('/dogs');
            })
            .catch(console.log("error update"));
    },

    destroy: (request, response) => {
        Dog.findByIdAndRemove(request.body)
            .then(dog => {
                response.redirect('/');
            })
            .catch(console.log("error destroy"));
    },
};
