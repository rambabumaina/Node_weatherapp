const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const news = require('./utils/news')


console.log(__dirname)
console.log(__filename)

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
app.use(express.static(publicdir))

app.get('/', (req, res) => {
    res.render('homepage', {
        title: 'home',
        name: 'Ram'
    })
})

app.get('/news', (req, res) => {
    res.render('newsPage', {
        title: 'home',
        name: 'Ram'
    })
})

app.get('/newstoday', (req, res) => {
    news((error, response) => {
        if (error) {
            return res.status(500).json({
                status: 'error',
                error: 'unable to connect news API',
            });
        }
        res.send(response)
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
        name: 'Ram'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help',
        name: 'Ram'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.status(400).json({
            status: 'error',
            error: 'req query param can not be empty',
        });
    }
    //Call geocode for conrdinates
    geocode(req.query.address, (err, { letitude, longitude, location } = {}) => {
        if (err) {
            return res.status(404).json({
                status: 'error',
                error: 'Unable to find location, try another search',
            });
        }
        //Call forecast for weather details    
        forecast(letitude, longitude, (error, forecadatastData) => {
            if (error) {
                return res.status(404).json({
                    status: 'error',
                    error: 'forecast',
                });
            }
            //send details on the UI...
            res.send({
                forecast: forecadatastData,
                location: location,
                address: req.query.address
            })
        });
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        msg: 'Page not found'
    })
})


app.listen(port, () => {
    console.log('Starting web-server on port :' + port)
})
