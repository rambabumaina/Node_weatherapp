const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


console.log(__dirname)
console.log(__filename)

const app = express();

//defines path to express config
const publicdir = path.join(__dirname, '../public')
const viewsdir = path.join(__dirname, '../templates/views')
const partialsdir = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsdir)
hbs.registerPartials(partialsdir)

//express.static used for static page render
app.use(express.static(publicdir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        appname: 'weather',
        name: 'Ram',
        description: 'This is home page of weather app',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        description: 'This is help page of weather app',
        name: 'Ram',
        contact: 'ME',
        appname: 'weather'
    })
})

app.get('/geek', (req, res) => {
    res.render('help', {
        title: 'Help',
        description: 'This is help page of weather app',
        name: 'Ram',
        contact: 'ME',
        appname: 'weather'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        description: 'We are small orgnization, and having 100 employee, Started app in 2020',
        appname: 'weather',
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

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        msg: 'help articale not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        msg: 'Page not found'
    })
})


app.listen(3000, () => {
    console.log('Starting web-server on port : 3000')
})
