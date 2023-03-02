const router = require('express').Router();
const Book = require('./../models/book');
// const express = require('express');
// const router = express().router();

router.get('/', async (req, res) => {    
    const books = await Book.find();
    res.send(books);
});
router.post('/', async (req, res) => {
    Book.create(req.body);
    res.send('book created');
});
router.get('/:id', async (req, res) => {
    const book = Book.findById(req.params.id);
    console.log(req.params.id);
    res.send('found book');
});
module.exports = router;