const express = require('express');
const router = express.Router();

const {getAllUsers, login} = require('../controllers/user.controller');
const {updateUser} = require('../controllers/user.controller');
const {deleteUser} = require('../controllers/user.controller');
const {createUser} = require('../controllers/user.controller');
const usuario = {
    nombre:'Juan',
    apellido:'salazar'
}

router.get('/',getAllUsers)
     .post('/', createUser )
     .put('/',  updateUser)
     .delete('/',  deleteUser);

router.post('/login', login);     



module.exports = router;