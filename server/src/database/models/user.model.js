/**
 * user model representation
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports= (sequelize,DataTypes)=>{
    const  User = sequelize.define('User',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        name: {

            type: DataTypes.STRING,
            allowNull: false
              
        },
        lastName: {
            type: DataTypes.STRING
        } ,
        email: {
            type: DataTypes.STRING
        }

    })


}