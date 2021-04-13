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
const { createRouterAdmin }            = require('./routes/Admin')
const { createRouterTest }             = require('./routes/tools')
require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())
app.use('/', createRouterAuthentification())
app.use('/', createRouterContact())
app.use('/', createRouterUpdateProfil())
app.use('/', createRouterAdmin())
app.use('/', createRouterTest())
app.use(express.static('client/build'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
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
    useFindAndModify  : true,
  }
        )
        .then(() => console.log('Connected to mongoDB'))
        .catch(err => console.log('Connection failed to mongoDB =>' + ' ' + err))
app.listen(process.env.PORT, () => console.log(`Service correctement démarrer sur le ${process.env.PORT}`))
