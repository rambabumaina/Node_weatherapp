const express = require('express');
const path = require('path');
const hbs = require('hbs');
const service = require('./service/weatherService')
const dbService = require('./service/userService')

const app = express();
const port = process.env.PORT || 3000

//defines path to express config
const publicdir = path.join(__dirname, '../public')
const viewsdir = path.join(__dirname, '../templates/views')
const partialsdir = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsdir)
hbs.registerPartials(partialsdir)

//express.static used for static page render
app.use(express.static(publicdir));

//This will set the body parameters for the post Methods
app.use(express.json());

//Controllers
app.get('/', service.home)
app.get('/news', service.news)
app.get('/weather', service.weather)
app.get('/newstoday', service.topNews)
app.get('/about', service.about)
app.get('/help', service.help)


//db endpoints
app.post('/users',dbService.createUsers)

//404 for when no endpoint matches
app.get('*', service.other)

//Application start point 
app.listen(port, () => {
    console.log('Starting web-server on port :' + port)
    console.log(__dirname)
    console.log(__filename)
    console.log('WELCOME');
})


