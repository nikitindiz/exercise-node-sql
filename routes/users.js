const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/:id', usersController.getUser);

router.put('/:id', usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

router.get('/', usersController.getUsers);

router.post('/', usersController.createUser);

module.exports = router;