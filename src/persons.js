const express = require('express');
const router = express.Router();

const Person = require('./mongoose').Person;

router.get('/api/person', (req, res) => {
    Person.find((err, persons) => {
        if (err) return res.status(500).send({error: 'Server error'});

        res.send(persons);
    });
});

router.post('/api/person', (req, res) => {
    /* Same as
    const person = new Person({
        name: req.body.name,
        age: req.body.age
    });
    */
    const person = new Person(req.body);

    person.save((err) => {
        if (err) {
            if (err.name === 'ValidationError') {
                return res.status(400).send({error: 'Validation error'});
            }
            return res.status(500).send({error: 'Server error'});
        }

        res.status(201).send(person);
    });
});

router.get('/api/person/:id', (req, res) => {
    Person.findById(req.params.id, (err, person) => {
        if (err) return res.status(500).send({error: 'Server error'});
        if (!person) return res.status(404).send({error: 'Not found'});

        res.send(person);
    });
});

// TODO: add other methods here

module.exports = router;
