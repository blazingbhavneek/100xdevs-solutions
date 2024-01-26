const mongoose = require('mongoose');
const mongopass = require('./mongopass'); 

mongoose.connect('mongodb+srv://bhavneek:'+mongopass+'@cluster0.eomkxnm.mongodb.net/');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model('todos', todoSchema)

module.exports = {
    Todo: Todo
}