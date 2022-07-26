require('dotenv').config({path:"./.env"})
const  Sequelize = require('sequelize');
const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.HOST}/budget_api`)
// const sequelize = new Sequelize('postgres://postgres:13320972@localhost/budget_api')




const TransactionModel = require('../models/Transactions')
const UserModel = require('../models/Users')

const Transaction = TransactionModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize)

Transaction.belongsTo(User, {foreignKey: "userId"})
User.hasMany(Transaction,  {foreignKey: "userId"} )

sequelize.sync({force:false}).then(()=> {
  console.log('tables sync' )

})

module.exports = {

  Transaction,
  User
  
}

