// Books model
const Book = require('./../models/book');
// Route Handlers
exports.getBooks = async (req, res) => {    
    const books = await Book.find();
    res.send(books);
}
exports.getBook =  async (req, res) => {
    const book = await Book.findById(req.params.id);
    console.log(req.params.id);
    res.send(book);
}
exports.createBook = async (req, res) => {
    Book.create(req.body);
    res.send('book created');
}