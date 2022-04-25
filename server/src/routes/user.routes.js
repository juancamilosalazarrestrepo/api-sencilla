const express = require('express');
const router = express.Router();
const usuario = {
    nombre:'Juan',
    apellido:'salazar'
}

router.get('/', (req,res)=>{
    res.json(usuario)

});

module.exports = router;