// 'MAIN' CONFIGURATION FILE //

// application imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const playerController = require('./controllers/players')

// define a port
const PORT = 8080

// create instance of express
const app = express()

// generic body-parser configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// generic cors configuration
app.use(cors())

// test controller reference
// create your own controller(s)
app.use('/api/v1/players', playerController)

// set listener for PORT
app.listen(PORT, function() {
    console.log('App started on port ' + PORT)
})

