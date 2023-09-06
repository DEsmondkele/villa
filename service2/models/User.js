const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String, // You should hash and salt passwords for security.
});

module.exports = mongoose.model('User', userSchema);
