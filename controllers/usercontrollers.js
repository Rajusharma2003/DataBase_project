
const User = require("../models/userModel.js");

// this is first routing.
exports.home =  (req , res) =>{
    res.send("hello world")
 }


//  this is second routing.
exports.registerUser = async (req , res) =>{
    try {
        
        const {email , password , name} = req.body

        if(!email || !password){
            throw new Error('email and password is required')
        }

        // if user is exist.
      const userExist = await User.findOne({email});

      if(userExist){
         throw new Error("user is allready Exists")
      }

      const user = await User.create({
        email,
        password,
        name
      })

    //   than all the work is finish. send response.
    res.status(201).json({
        success : true,
        message : 'User registation successfully',
        user
    })



    } catch (error) {
        console.log(error);

        res.status(400).json({
            success : true,
            message : error.message
        })
    }
}


exports.loginUser = async (req , res) =>{
    const {email , password} = req.body

    try {

        const user = await User.findOne({email})
        if(user.password == password){
            
            res.status(200).send({msg:"User Login Successfully"})
        }
       else {
        res.status(400).send({msg:"password is incorrect"})

       }
        
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success : false,
            message : " user login unsuccessfully"
        })
        
    }
}