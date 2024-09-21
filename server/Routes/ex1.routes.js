const express = require('express');
const router = express.Router();

const UserController = require('../Controller/ex1.controller');

//get all user route
router.get('/alluser',UserController.getalluser);

//get specific user
router.get('/specific/:id',UserController.getspecificuser);

//carete new user route 
router.post('/insert',UserController.adduser);

//update User
router.put('/update/:id',UserController.updateuser);

//delete route
router.delete('/delete/:id',UserController.deleteUser);

//search data
router.get('/search/:key',UserController.searchdata);

module.exports = router;