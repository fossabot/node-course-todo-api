// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongo');
  };
  console.log('Connected to the mongo server');

  //deleteMany and delete duplicates
  //
  // db.collection('Todos').deleteMany({text: 'create more tasks to delete'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne

  // db.collection('Todos').deleteOne({text: 'create more tasks to delete'}).then((result) => {
  //    console.log(result);
  // });

  //findOneAndDelete
  //
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

//USERS

  // db.collection('Users').deleteMany({location: 'Alameda'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b0095c4615f4203e96a3d9c')
  }).then((result) => {
    console.log(result);
  })

  //db.close();
});
