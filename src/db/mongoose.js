const mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/weather-stock-app', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false
})