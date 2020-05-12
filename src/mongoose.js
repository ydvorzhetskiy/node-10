const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node-10');

const db = mongoose.connection;

db.on('error', function (err) {
    console.error('err.message');
});
db.once('open', function callback() {
    console.info("Connected to MongoDB!");
});


// Schemas

const Schema = mongoose.Schema;

const Person = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
});

// TODO: add other schemata here


// Models

const PersonModel = mongoose.model('person', Person);

// TODO: add other models here


module.exports = {
    PersonModel,
    // TODO: add other models here
};
