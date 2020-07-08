const express = require('express')
const userService = require('../service/userService')

const router = new express.Router();

//User Controllers
router.post('/users', userService.createUsers);
router.get('/users', userService.getUsers);
router.get('/users/:id', userService.getUserById);
router.patch('/users/:id', userService.updateUser);
router.delete('/users/:id', userService.deleteUser);

module.exports = router;