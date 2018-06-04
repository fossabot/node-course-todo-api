//mongoose.js docs - queries
const {MongoClient, ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Remove everything from a db
// Todo.remove({}).then((result){ => {
//     console.log(result);
// }})
//
// Todo.findOneAndRemove({}).then((todo) => {
//
// })

Todo.findByIdAndRemove('5b1334bf4de49a1d25c58013').then((todo) => {
    console.log(todo);
});
