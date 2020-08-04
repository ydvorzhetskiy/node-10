const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node-10');

const db = mongoose.connection;

db.on('error', err => {
    console.error('err.message');
});
db.once('open', function callback() {
    console.info("Connected to MongoDB!");
});


// Schemas

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
});

// TODO: add other schemata here


// Models

const Person = mongoose.model('person', PersonSchema);

// TODO: add other models here


module.exports = {
    Person: Person,
    // TODO: add other models here
};
