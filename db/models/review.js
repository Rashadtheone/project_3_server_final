const mongoose = require('mongoose')

// child schema
const CommentSchema = new mongoose.Schema({
  comment: String,
  author: String
})

// parent schema
const ReviewSchema = new mongoose.Schema({
  reviewTitle: String,
  albumTitle: String,
  reviewBody: String,
  comments: [CommentSchema],
  imageUrl: String,
  rating: String,
  votes: Number
})

mongoose.model('Review', ReviewSchema)
mongoose.model('Comment', CommentSchema)

module.exports = mongoose
