const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
    },
    transactions: {
        type: Array,
        required: false,
        default: [],
    },
    friends: {
        type: Array,
        required: false,
        default: [],
    }
});

const User = mongoose.model('User', UserSchema);


module.exports = User;