var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo ({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).res.send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) =>{
        res.send({
            todos});
    }, (e) => {
        res.status(400).res.send(e);
    });
});

//GET /todos/12341234
app.get('/todos/:id', (req,res) => {
    var id = req.params.id;
    // res.send(req.params);
    //validate ID using isValid
        //if not valid, respond with 404 - send back empty body
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('That is not a valid ID');
    };

    //query db with findById
    //success
    Todo.findById(id).then((todo) => {
        //if todo - send it back
        if (!todo) {
            //if no todo - call succeed but no id - send back 404 with empty body
            return res.status(404).send('Could not find your todo!')
        };

        res.status(200).send(JSON.stringify([todo.text, todo.completedAt], undefined, 2));
        //the following will also work!
        // res.send({todo});
    }, (e) => {
        //error
        //400 - and send empty body back
        return res.send('Something went wrong...')
    }).catch((e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req,res) => {
    // get the ID from the URL
    var id = req.params.id;
    //validate the ID.  if not valid, return a 404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('That is not a valid ID');
    };
    //remove todo by the id
    Todo.findByIdAndRemove(id).then((todo) => {
        //success
            //if no doc, send 404
        if (!todo) {
            return res.status(404).send('No Todo by that ID');
        };
            //if doc, send doc back with 200
        res.status(200).send('Your Todo was removed');
    }, (e) => {
        //error
            //400 with empty body
        return res.send('Something went wrong..');
    }).catch((e) => {
        res.status(500).send();
    })
});


app.listen(port, () => {
    console.log(`Started up on port ${port}`);
});

module.exports = {app};
