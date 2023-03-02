// Dependencies
require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
// Mongoose
const connect = async () => {
    try {
        // Connecting to mongoose
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            UseUnifiedTopology: true
        });
        // Test console log
        console.log(`mongoose connected to db: ${process.env.MONGO_URI}`);
    } catch(err) {
        // Test console log
        console.log(err, 'Mongoose connection error');
    }
}
connect();
// Server on
app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
    console.log("Server is running.");
});