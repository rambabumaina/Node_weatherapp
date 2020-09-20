const socket = io();

//Elements
const $messageForm = document.querySelector('#message-from');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $sendLocationButton = document.querySelector('#send-location');
const $chatMessages = document.querySelector('#chat-messages')

//Templates
const messageTemplate = document.querySelector('#message-template').innerHTML


//Receive the message from server
socket.on('message', (message) => {
    console.log(`Message from server : ${message}`)
    
    const html = Mustache.render(messageTemplate, {
        message
    })
    
    $chatMessages.insertAdjacentHTML('beforeend', html)
})

//form data from chat.hbs
$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    //Disable button
    $messageFormButton.setAttribute('disabled', 'disabled')

    //When click on the send message and submit, it send message to server
    const message = e.target.elements.message.value
    socket.emit('sendMessage', message, (error) => {

        //Enable a button
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()

        if (error) {
            return console.log(error)
        }
        console.log('Message delivered!')
    })
})

$sendLocationButton.addEventListener('click', () => {

    $sendLocationButton.setAttribute('disabled', 'disabled')
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser!')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            logitude: position.coords.longitude
        }, () => {
            console.log('location shared!')
            $sendLocationButton.removeAttribute('disabled')
        })
    })
})

