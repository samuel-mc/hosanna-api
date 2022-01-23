const express = require('express');
const app = express();

const {
    postEmail,
    getEmails,
    deleteEmail
} = require('../controllers/email.controllers');

app.post('/', postEmail);
app.get('/', getEmails);
// app.put('/:id', putEmail);
app.delete('/:email', deleteEmail);

module.exports = app;