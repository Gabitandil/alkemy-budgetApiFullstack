const {Router} = require('express')
const router = Router()
const db = require('../models/Transactions')
const Transactions = db.transactions
 const {Transaction } = require('../config/db')
 
 router.post('/', async (req, res) => {
    let {
        concept,
        amount,
        date,
        type_transaction,  
    } = req.body



 try {
    let createTransaction = await Transaction.create({
        concept: concept,
        amount: amount,
        date: date,
        type_transaction: type_transaction
    })
    res.send(createTransaction)
 } catch (error) {
    console.log(error.message)
 }
     
})



router.get('/', async (req,res) => {
    try {
        const data = await Transaction.findAll()

        res.send(data)
    } catch (error) {
        console.log(error.message)
    }
  
    
})



router.put('/change/:id', async (req, res) => {
    try {
        const {id } = req.params
        let {concept, amount} = req.body
        
         await Transaction.update({concept, amount},
             {
            where : {
                id
            }
        } )
        res.status(200).send("transaction succesfully updated")
    } catch (error) {

        console.log(error.message)
    }
   

})

router.delete('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params
        await Transaction.destroy({
         where: {id}
        })
        res.status(200).send("transaction deleted succesfully")
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router;