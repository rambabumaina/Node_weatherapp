const express = require('express')

const router = new express.Router();

router.get('/chat',(req, res) => {
    res.render('chat', {
        title: 'chat',
        name: 'Ram'
    })
})

module.exports = router;