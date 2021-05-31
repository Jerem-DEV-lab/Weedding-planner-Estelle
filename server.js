const express                          = require('express')
const bodyParser                       = require('body-parser')
const cors                             = require('cors')
const app                              = express()
const mongoose                         = require('mongoose')
const { createRouterAuthentification } = require('./routes/UserRoutes/AuthenficationRoute')
const { createRouterContact }          = require('./routes/UserRoutes/ContactToAdminRoute')
const { createRouterUpdateProfil }     = require('./routes/UserRoutes/UpdateProfilRoute')
const cookieParser                     = require('cookie-parser')
const path                             = require('path')
const { createRouterRating }           = require('./routes/UserRoutes/RatingRoute')
const { createRouterAdmin }            = require('./routes/Admin')
const { createRouterTest }             = require('./routes/tools')
require('dotenv').config()

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/', createRouterAuthentification())
app.use('/', createRouterContact())
app.use('/', createRouterUpdateProfil())
app.use('/', createRouterAdmin())
app.use('/', createRouterTest())
app.use('/', createRouterRating())
app.use(express.static('client/build'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
/*
 if (process.env.NODE_ENV === 'production') {
 console.log('ici ?')
 app.use(express.static('client/build'))
 }*/

mongoose.connect(
  `${process.env.DB}`,
  {
    useNewUrlParser   : true,
    useCreateIndex    : true,
    useUnifiedTopology: true,
    useFindAndModify  : false,
  }
        )
        .then(() => console.log('Connected to mongoDB'))
        .catch(err => console.log('Connection failed to mongoDB =>' + ' ' + err))
app.listen(process.env.PORT, () => console.log(`Service correctement démarrer sur le ${process.env.PORT}`))
