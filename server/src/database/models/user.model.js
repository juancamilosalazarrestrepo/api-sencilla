const bcrypt = require('bcryptjs');

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
            type: DataTypes.STRING,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false

        }


    },{
        tableName:'users',
        timestamps: true,
        hooks:{
            beforeCreate: async (user)=>{
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password,salt);

            }
        }

    });

    User.prototype.validPassword = async function(password){
        return await bcrypt.compare(password,this.password);
    }

    return User;


}