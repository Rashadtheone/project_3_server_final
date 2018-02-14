const express           = require('express')
const bodyParser        = require('body-parser')
const cors              = require('cors')
const reviewsController = require('./controllers/reviews')
const albumsController  = require('./controllers/albums')

// create instance of express
const app = express()

// body-parser config
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// cors config
app.use(cors())

//User Auth 


// controllers
app.use('/reviews', reviewsController)
app.use('/albums', albumsController)

// port config
app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})

