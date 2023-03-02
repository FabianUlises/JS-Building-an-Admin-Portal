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
        res.status(400).json({
            status: 'fail',
            message: `unable to find book, error: ${err}`
        });
    }
};
exports.createBook = async (req, res) => {
    try {
        await Book.create(req.body);
        res.status(200).json({
            status: 'success',
            message: 'Book created'
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: `unable to create book, error: ${err}`
        });
    }
};