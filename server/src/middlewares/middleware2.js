const middlewares2 = (req,res,next) => {
    console.log('hola desde middleware 2');
    next();
}

module.exports = middlewares2;