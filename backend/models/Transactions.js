const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   return sequelize.define('transaction', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        concept:{
            type: DataTypes.STRING
        },
        amount:{
            type: DataTypes.INTEGER
        },
        date:{
            type: DataTypes.DATEONLY
        },
        type_transaction:{
            type: DataTypes.STRING
        },
       
    })
}