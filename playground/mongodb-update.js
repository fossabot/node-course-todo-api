// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongo');
  };
  console.log('Connected to the mongo server');
  // 
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID ("5af3b2aa44d82b165e9cca53")
  // }, {
  //   $set: {
  //     completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID ("5b0095ae615f4203e96a3d9b")
  }, {
      $set: {
          name: "Mr Pool"
      },
      $inc: {
          age: 5
      }
  }, {
      returnOriginal: true
  }).then((result) => {
      console.log(result);
  });

  //db.close();
});
