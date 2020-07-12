const express = require('express')
const userService = require('../service/userService')
const auth = require('../middleware/Auth');

const router = new express.Router();

//Athentication
router.get('/users/me', auth, userService.getMyprofile);
router.post('/users/login', userService.login);
router.post('/users/logout', auth, userService.logout);

//User Controllers
router.post('/users', userService.createUsers);
router.get('/users', userService.getUsers);
router.get('/users/:id', userService.getUserById);
router.patch('/users/:id', userService.updateUser);
router.delete('/users/:id', userService.deleteUser);

module.exports = router;