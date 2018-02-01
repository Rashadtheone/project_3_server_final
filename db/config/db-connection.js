// we're importing a mongoose instance which has our model configuration attached to it
const mongoose = require('../models/review')

// using native ES6 Promises, in place of mongoose's deprecated mpromise library
// `Promise` will provides us with a couple methods: .then() for success, 
// and .catch() for errors
mongoose.Promise = Promise

// set the uri for connecting to our local mongodb
// sub in YOUR DB NAME for [expressboiler]
// const mongoUri = 'mongodb://localhost/reviewdb'

// connect to the database, with the imported mongoose instance
// mongoose
//   .connect(mongoUri, {useMongoClient: true})
//   .then(connection => console.log(`Connection established to db '${connection.db.databaseName}'`))
//   .catch(connectionError => console.log('Connection failed!', connectionError))

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/project_3_server_final");
}

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration
module.exports = mongoose
