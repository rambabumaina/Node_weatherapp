const express = require('express')
const path = require('path');
const viewHtml = path.join(__dirname, '../../templates/viewhtml')

const router = new express.Router();

router.get('/chatjoin',(req, res) => {
    res.sendFile(viewHtml+'/chatapp.html')
})

router.get('/chatapp',(req, res) => {
    res.sendFile(viewHtml+'/chat.html')
})

module.exports = router;