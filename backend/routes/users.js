const {Router} = require('express')

const router = Router()

const {User } = require('../config/db')
const jwt = require('jwt-simple')


router.post('/register',  async(req, res)=> {
    let {
        email,
        password
    } = req.body
    try {
        let users = await User.findOne({where : {email: req.body.email}})
        if(!users){
            let createUser = await User.create({
                email: email,
                password: password
            })
            return res.json(createUser)
        }
         else{
             return res.json({error : "email already exist"})
         }
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/login', async (req,res) => {
    const user = await User.findOne({where : {email: req.body.email}})
    if(user){
       if(user.password === req.body.password){
           await user.update({ token : createToken(user) }, {where : {token: user.token}})
           return res.json(user)
       }
       else{
        return res.status(400).json({msg: "wrong password"})
       }
    }
    else{
        return res.status(400).json({msg :"user not registered"})
    }
})

function createToken(user){
 const payload = {
    userId : user.id,
 }
 return jwt.encode(payload, "SECRET WORD")

}
router.get('/test', async (req, res )=> {
    let prueba = await User.findAll()
    return res.json(prueba)
})

module.exports = router;