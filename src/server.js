const express = require('express');
const personsRouter = require('./persons')

const app = express();

app.use(express.json());

app.use(personsRouter);
// TODO: add other routes here

app.listen(3000, () => console.log('Express server listening on 3000'));
