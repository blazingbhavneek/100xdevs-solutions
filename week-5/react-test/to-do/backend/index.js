/* eslint-disable no-unused-vars */
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/your-database', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/todos', (req, res)=>{
    // res.send(todos)
});

app.post('/todos', (req, res)=>{
    // res.send(todos)
});

app.put('/todos', (req, res)=>{
    // res.send(todos)
});



// Global catch
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});