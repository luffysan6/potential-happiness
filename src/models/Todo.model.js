const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:String,
    status:Boolean
})

const todo = mongoose.model("todolist",todoSchema);

module.exports = todo;