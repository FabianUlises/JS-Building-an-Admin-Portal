// Dependencies
const book = require('./models/book');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const booksController = require('./controllers/booksController');
// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/v1/books', booksController);
app.get('*', (req, res) => {
    res.send('page not found');
});
module.exports = app;