const server = require('./app')
const socketio = require('socket.io')
const {genrateMessage} = require('./utils/message')


//port to start application 
const port = process.env.PORT
const io = socketio(server)

//we socket connection 
io.on('connection', (socket) => {
    console.log('New web socket connection')

    //send when join the room
    socket.on('join', ({username, room}) => {
        socket.join(room)

    //Welcome message when you leand on the chat page
    socket.emit('message', genrateMessage('WELCOME!'))

    //Broadcast message when user joins
    socket.broadcast.to(room).emit('message', genrateMessage(`${username} has Joined!`))
    })

    //Send (USER A to all) Message from one user to all other users
    socket.on('sendMessage', (message,callback) => {
        io.emit('message', genrateMessage(message))
        callback()
    })

    //send message when User left the page
    socket.on('disconnect', () => {
        io.emit('message', genrateMessage('A user has left!'))
    })


    //Receive the location
    socket.on('sendLocation', (cords,callback) =>{
        io.emit('locationMessage', genrateMessage(`https://google.com/maps?q=${cords.latitude},${cords.logitude}`))
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
