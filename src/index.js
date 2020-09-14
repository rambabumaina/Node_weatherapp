const app = require('./app')

//port to start application 
const port = process.env.PORT

//Application start point 
app.listen(port, () => {
    console.log('Starting web-server on port :' + port)
    console.log(__dirname)
    console.log(__filename)
    console.log('WELCOME');
})
