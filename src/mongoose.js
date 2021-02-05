const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/otus-node-10');

const db = mongoose.connection;

db.on('error', err => console.error(err.message));
db.once('open', () => console.info("Connected to MongoDB!"));


// Schemas

const PersonSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
});

// TODO: add other schemata here


// Models

const Person = mongoose.model('people', PersonSchema);

// TODO: add other models here


module.exports = {
    Person,
    // TODO: add other models here
};
