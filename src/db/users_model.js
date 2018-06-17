var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    username: String,
    password: String,
    created_date: Date
});

module.exports = mongoose.model('users', UsersSchema);