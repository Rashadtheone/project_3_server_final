const mongoose = require('../models/review')

// using native ES6 Promises, in place of mongoose's deprecated mpromise library
mongoose.Promise = Promise

// db connection w/mLab config
if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/project_3_server_final")
}

module.exports = mongoose
