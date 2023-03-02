// Dependencies
const router = require('express').Router();
// Bookroutes
const bookRouter = require('./bookRouters');
// Routes
// Seed route
router.get('/seed', bookRouter.seedBooks)
router.route('/')
    .get(bookRouter.getAllBooks)
    .post(bookRouter.createBook)
router.route('/:id')
    .get(bookRouter.getBook)
    .patch(bookRouter.updateBook)
    .delete(bookRouter.deleteBook)
module.exports = router;