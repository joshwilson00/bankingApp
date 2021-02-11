const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true,
    },
    balance: {
        type: Float32Array,
        required: true
    },
    transactions: {
        type: Array,
        required: false,
    },
    friends: {
        type: Array,
        required: false,
    }
});

module.exports = User;