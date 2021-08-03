const mongoose = require('../db');
const { Schema } = mongoose;

const messageSchema = new Schema({
    user: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
});

const message = mongoose.model('messages', messageSchema);

module.exports = message;