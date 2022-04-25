const express = require('express');
const router = express.Router();
const usuario = {
    nombre:'Juan',
    apellido:'salazar'
}

router.get('/', (req,res)=>{
    res.json(usuario)

});


router.post('/', (req,res) => {
    res.json('Post to user endpoint')

} );

router.put('/', (req,res) => {
    res.json('Put to user endpoint')

} );

router.delete('/', (req,res) => {
    res.json('delete to user endpoint')

} );



module.exports = router;