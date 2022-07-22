const {Router} = require('express')

const router = Router()

const {User } = require('../config/db')


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
             return res.json('el usuario ya existe')
         }
       

       
        
            
        
           


     
    } catch (error) {
        console.log(error.message)
    }

})





module.exports = router;