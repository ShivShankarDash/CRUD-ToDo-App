// Write basic express boilerplate code, with express.json middleware

const express = require('express')
const app = express()
const port = 3000
const {todo} = require("./db")
// const schema = require('./types')     //ugly way as it . access to each object
const cors = require('cors')
const {createdTodo, updatedTodo} = require('./types')
app.use(express.json())
app.use(cors());

app.post('/todo', async (req,res)=>{

    // const title = req.body.title
    // const description = req.body.description
    const createPayLoad = req.body
    const parsedPayLoad =  createdTodo.safeParse(createPayLoad)
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg : "You sent the wrong input"
        })
    }
    await todo.create({
        title : createPayLoad.title,
        description : createPayLoad.description,
        completed : false
    })
    res.json({
        msg : "To do created"
    })

})

app.get('/todos', async (req,res)=>{

    const todos = await todo.find({})
    res.json({
        todos : todos
    })

})

app.put('/completed', async (req,res)=>{
   const updatePayLoad = req.header
   const parsedPayLoad = updatedTodo.safeParse(updatePayLoad)
   if(!parsedPayLoad.success){
        res.status(411).json({
            msg : "You provided the wrong id"
        })
   }
   await todo.update({
        _id : req.body.id
   },{
        completed : true
   })
   res.json({
    msg : "ToDO is updated"
   })

})

app.listen(port, ()=>{
    console.log(`CRUD ToDo App listening on ${port}`)
})