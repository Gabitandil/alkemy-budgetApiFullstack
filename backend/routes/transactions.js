const {Router} = require('express')
const router = Router()
 const {Transaction } = require('../config/db')
 const {User } = require('../config/db')

 router.post('/create',async (req, res) => {
    let {
        concept,
        amount,
        date,
        type_transaction,  
        category
    } = req.body
    let token = req.headers["token"].split(" ")[1]
 try {
    let getUserid = await User.findOne({where : {token: token}})
    if(!getUserid){
        res.json({error : "wrong token"})

    }
    if(getUserid){
        let createTransaction = await Transaction.create({
            concept: concept,
            amount: amount,
            date: date,
            type_transaction: type_transaction,
            category : category,
            userId: getUserid.id
        })
        if (createTransaction.type_transaction == "expense"){
            let expenseTransaction = await Transaction.update({ amount:-Math.abs(amount)}, {where: {id: createTransaction.id}})
                
          return  res.send(expenseTransaction)
    
        } else {
          return  res.send(createTransaction)
        }
    }
    
 } catch (error) {
    console.log(error.message)
 }
     
})

router.get('/', async (req,res) => {
    try {
        const data = await Transaction.findAll({
        })
        res.send(data)
    } catch (error) {
        console.log(error.message)
    }
})

router.get('/account/transactions', async (req, res )=> {
    let token = req.headers["token"].split(" ")[1]
    
    try {
        const userId = await User.findOne({where :  {token: token}})
        if(!userId){
            return res.status(400).json({msg :"wrong token"})
        }
        else{
            const getData = await Transaction.findAll({include : User})
            let filterByAccount = getData.filter(el => el.userId === userId.id)
            res.send(filterByAccount)
        }
    } catch (error) {
        return res.status(400).json({msg :"wrong token"})
    }
})

router.put('/change/:id', async (req, res) => {
    try {
        const {id } = req.params
        let {concept, amount, date} = req.body
        
       let createTransaction =   await Transaction.update({concept, amount, date},
             {
            silent: true,
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