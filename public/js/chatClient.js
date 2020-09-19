const socket = io();

//Receive the message from server
socket.on('message', (msg) => {
    console.log(`Message from server : ${msg}`)
})

//form data from chat.hbs
document.querySelector('#message-from').addEventListener('submit', (e) => {
    e.preventDefault()

    //When click on the send message and submit, it send message to server
    const message = e.target.elements.message.value
    socket.emit('sendMessage', message)
})

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser!')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
    })
})

