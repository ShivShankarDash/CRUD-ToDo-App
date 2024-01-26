// Type of input from user 

// {title : String , description : String}  , {id : String}

const zod = require('zod')

const createdTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updatedTodo= zod.object({
    id : zod.string()
})

module.exports = {
    createdTodo : createdTodo,
    updatedTodo : updatedTodo
}