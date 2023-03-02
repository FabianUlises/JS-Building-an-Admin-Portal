// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const booksController = require('./controllers/booksController');
// Middleware
app.use(express.json());
// Routes
app.use('/books', booksController);
app.get('/', (req, res) => {
    res.send('root route');
});
app.get('*', (req, res) => {
    res.send('page not found');
});
module.exports = app;