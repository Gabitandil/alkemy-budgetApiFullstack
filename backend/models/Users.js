const {dataTypes, DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define('user', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement :true
        },
        username: {
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        token: {
            type: DataTypes.STRING
        }
        
    })
}