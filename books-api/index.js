require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const booksController = require('./controllers/booksController');
// Middleware
app.use(express.json());
// mongoose
const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log(`mongoose connected to db: ${process.env.MONGO_URI}`);
    } catch(err) {
        console.log(err, 'Mongoose connection error');
    }
}
connect();
// Routes
app.use('/books', booksController);
app.get('/', (req, res) => {
    res.send('root route');
});
app.get('*', (req, res) => {
    res.send('page not found');
});
app.listen(process.env.PORT, () => {
    console.log('server listening');
});