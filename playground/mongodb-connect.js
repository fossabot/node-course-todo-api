// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

var user = {name: 'Pasquale', age:28};
var {name} = user;

console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongo');
  };
  console.log('Connected to the mongo server');
  //
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  //
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert ToDo', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  //   });
  //insert a new doc into the collection

  //Users (name, age, location)

//   db.collection('Users').insertOne({
//     name: 'Pasquale',
//     age: 28,
//     location: 'Oakland'
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to add the user', err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   })
//
//   db.close();
});
