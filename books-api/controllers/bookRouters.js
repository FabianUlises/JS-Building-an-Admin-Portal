// Books model
const Book = require('./../models/book');
// Route Handlers
exports.getAllBooks = async (req, res) => {    
    try {
        const books = await Book.find();
        res.status(200).json({
            status: 'success',
            data: books
        });
    } catch(err) {
        // test console log
        console.log('error');
        res.status(404).json({
            status: 'fail',
            message: `There was an error with your request, error: ${err}`
        });
    }
};
exports.getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: book
        });
    } catch(err) {
        // test console log
        console.log('error')
        res.status(404).json({
            status: 'fail',
            message: `Unable to find book, error: ${err}`
        });
    }
};
exports.createBook = async (req, res) => {
    try {
        await Book.create(req.body);
        res.status(201).json({
            status: 'success',
            message: 'Book created'
        });
    } catch(err) {
        // test console log
        console.log('error')
        res.status(404).json({
            status: 'fail',
            message: `Unable to create book, error: ${err}`
        });
    }
};
exports.updateBook = async (req, res) => {
    try {
        await Book.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status: 'success',
            message: 'Book was updated'
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: `Unable to update book, err: ${err}`
        });
    }
};
exports.deleteBook = async (req, res) => {
    try {
        console.log('deleting book');
        await Book.findByIdAndDelete(req.params.id);
        console.log('book deleted, sending json')
        res.status(200).json({
            status: 'success',
            message: 'Book was deleted'
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: `Unable to delete book, err: ${err}`
        });
    }
};
// Seed route
exports.seedBooks = async(req, res) => {
    try {
        await Book.insertMany([{
            "title": "The Shinobi Initiative",
            "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
            "year": 2014,
            "quantity": 10,
            "imageURL": "https://imgur.com/LEqsHy5.jpeg"
          },
          {
            "title": "Tess the Wonder Dog",
            "description": "The tale of a dog who gets super powers",
            "year": 2007,
            "quantity": 3,
            "imageURL": "https://imgur.com/cEJmGKV.jpg"
          },
          {
            "title": "The Annals of Arathrae",
            "description": "This anthology tells the intertwined narratives of six fairy tales.",
            "year": 2016,
            "quantity": 8,
            "imageURL": "https://imgur.com/VGyUtrr.jpeg"
          },
          {
            "title": "W∀RP",
            "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
            "year": 2010,
            "quantity": 4,
            "imageURL": "https://imgur.com/qYLKtPH.jpeg"
          }]);
          res.status(200).json({
            status: 'success',
            message: 'Seed successful'
          });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: `Unable to seed books, err: ${err}`
        });
    }
};