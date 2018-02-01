const mongoose = require('mongoose')

// define a schema where the field-name is the key in the object passed in
// as an argument to mongoose.Schema, and the object values are the data type of that field
const CommentSchema = new mongoose.Schema({
  comment: String, 
  author: String
})

const ReviewSchema = new mongoose.Schema({
  title: String,
  album: String,
  thoughts: String, 
  comments: [CommentSchema], 
  imageUrl: String
})

// builds a model from the schema, and attaches it to our mongoose instance.
// a model is used to query and change data in the database
mongoose.model('Review', ReviewSchema)

module.exports = mongoose
