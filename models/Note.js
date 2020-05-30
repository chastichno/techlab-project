const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const NoteSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    prompt: {
        type: String,
        required: true
    }
});

module.exports = Note = mongoose.model('Note', NoteSchema);