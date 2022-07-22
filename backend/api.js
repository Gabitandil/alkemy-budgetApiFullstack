const {Router} = require('express')
const router = Router()
const Transactions = require('./routes/transactions')
const userRoutes = require('./routes/users')

router.use('/', Transactions)
router.use('/user', userRoutes)



module.exports = router