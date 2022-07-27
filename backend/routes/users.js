const {Router} = require('express')

const router = Router()

const {User } = require('../config/db')
const jwt = require('jwt-simple')


router.post('/register',  async(req, res)=> {
    let {
        username,
        password
    } = req.body
    try {
        let users = await User.findOne({where : {username: req.body.username}})
        if(username.length === 0) return res.status(400).json({msg: "username is empty"})
        if(password.length === 0) return res.status(400).json({msg: "password is empty"})
        if(!users){
            let createUser = await User.create({
                username: username,
                password: password
            })
            return res.json(createUser)
        }
         else{
             return res.status(400).json({msg : "username already used"})
         }
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/login', async (req,res) => {
    if(!req.body.username) return res.status(400).json({msg: "username is empty"})
   
        
        const user = await User.findOne({where : {username: req.body.username}})
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

module.exports = router;