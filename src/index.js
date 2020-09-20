const server = require('./app')
const socketio = require('socket.io')

//port to start application 
const port = process.env.PORT
const io = socketio(server)

//we socket connection 
io.on('connection', (socket) => {
    console.log('New web socket connection')

    //Welcome message when you leand on the chat page
    socket.emit('message', 'WELCOME TO CHAT APP')

    //Broadcast message when user joins
    socket.broadcast.emit('message', 'A new User has Joined!')

    //Send (USER A to all) Message from one user to all other users
    socket.on('sendMessage', (message,callback) => {
        io.emit('message', message)
        callback()
    })

    //send message when User left the page
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left!')
    })

    //Receive the location
    socket.on('sendLocation', (cords,callback) =>{
        io.emit('message', `https://google.com/maps?q=${cords.latitude},${cords.logitude}`)
        callback()
    })
})

//Application start point 
server.listen(port, () => {
    console.log(`Started Weather-app on port ${port}!`)
    console.log(__dirname)
    console.log(__filename)
    console.log('WELCOME');
})
