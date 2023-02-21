require('dotenv').config();
const express = require('express');
const app = express();
// Middleware
app.use(express.json());
// Routes
app.get('/', (req, res) => {
    res.send('root route');
});
app.get('*', (req, res) => {
    res.send('page not found');
});
app.listen(4001, () => {
    console.log('server listening');
});