const {Router} = require('express')
const router = Router()

const {User } = require('../config/db')


router.get('/register', (req, res)=> {
    console.log('soy register')
})





module.exports = router;