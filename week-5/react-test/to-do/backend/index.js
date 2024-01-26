/* eslint-disable no-unused-vars */
const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/todos', async (req, res)=>{
    // res.send(todos)
    const todos = await Todo.find({});
    res.json({todos});
});

app.post('/todos', async (req, res)=>{
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            message:"Wrong Inputs sent"
        });
        return;
    }

    await Todo.create({
        title: payload.title,
        description: payload.description,
        completed: false
    })

    res.json({
        message: "ToDo created"
    })
});

app.put('/todos', async (req, res)=>{
    // res.send(todos)
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "Wrong type of ID"
        })
        return;
    }

    await Todo.update({
        _id: payload.id
    }, {
        completed:true
    })
});



// Global catch
app.use((err, req, res, next) => {
    if(err){
        console.log(err);
        res.status(404).send("Internal error occurred! Contact Admin")
      }
    else{
        next();
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});