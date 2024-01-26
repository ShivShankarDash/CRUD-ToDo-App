// Contains the db schema for todos

const mongoose = require('mongoose')
const { boolean } = require('zod')
mongoose.connect("mongodb+srv://shivdev:1234567890@devcluster.nsg2kp7.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title : String, 
    description : String, 
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo
}
