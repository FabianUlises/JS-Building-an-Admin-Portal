// Dependencies
const router = require('express').Router();
// Bookroutes
const bookRouter = require('./bookRouters');
// Routes
router.route('/')
    .get(bookRouter.getAllBooks)
    .post(bookRouter.createBook)
router.get('/:id', bookRouter.getBook);
module.exports = router;