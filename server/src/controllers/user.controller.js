const middlewares1 = require("../middlewares/middleware1");
const middlewares2 = require("../middlewares/middleware2");


const {User} = require('../database/models')
const userCtrl = {}

userCtrl.login = async (req,res) => {
    const { email, password} = req.body;
    const user = await User.findOne({
        where: {
            email
        }
    });
    if(user.validPassword(password)){
        return res.json('usuario login ok')
    }else{
        res.json('user o contraseña no validoo no logeado')
    }
}

userCtrl.getAllUsers =[middlewares1,middlewares2] , async (req,res)=>{

    const users = await Users.findAll();
    res.json(users);

}

userCtrl.createUser =  async (req,res) => {
    const {name, lastName, email, password} = req.body;
   const user= await User.create({name,lastName,email,password});

    res.json(user);

}

userCtrl.updateUser = (req,res) => {
    res.json('Put to user endpoint');

}

userCtrl.deleteUser = (req,res) => {
    res.json('delete to user endpoint');



}


module.exports = userCtrl;