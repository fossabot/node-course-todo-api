//mongoose.js docs - queries
const {MongoClient, ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b1334bf4de49a1d25c58014';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
//
//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id:id
// }).then((todo) => {
//     console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found!');
//     }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));

//Challenge! Query DB and find user by ID.  handle if the user isn't found and if there may be any errors


var userId = '5b07821fa68bfb9b3f5258b6';

User.find({
    _id:userId
}).then((user) => {
    if (!user) {
        return console.log('User not found');
    };
    console.log('Found user ', user);
});

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found!');
    };
    console.log('findById found user ', JSON.stringify(user, undefined, 2));
});
