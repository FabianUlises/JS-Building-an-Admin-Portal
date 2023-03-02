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
exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(204).json({
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