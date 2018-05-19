// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongo');
  };
  console.log('Connected to the mongo server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5af27c0a6eb88b116a9fcdb2')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch', err);
  // });
  //
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Count of Todos: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch', err);
  // });

  db.collection('Users').find().toArray().then((users) =>{
    console.log('Users');
    console.log(JSON.stringify(users, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch ', err);
  });

});
