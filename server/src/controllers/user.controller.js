const userCtrl = {}

userCtrl.getAllUsers =  (req,res)=>{
    res.json('get to user end point');

}

userCtrl.createUser =  (req,res) => {
    res.json('Post to user endpoint');

}

userCtrl.updateUser = (req,res) => {
    res.json('Put to user endpoint');

}

userCtrl.deleteUser = (req,res) => {
    res.json('delete to user endpoint');



}


module.exports = userCtrl;