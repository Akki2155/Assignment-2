const userModel = require("../models/userModel");
const jwt=require('jsonwebtoken');



exports.registerUser =  async (req, res) => {
    console.log(req.body);
   
    if(req.body.name ==="" || req.body.email==="" || req.body.password===""){
        return res.status(400).json({
                    status:"Fail",
                    message:"Invalida Credentials"
                })
    }
  
    const user=await userModel.create(req.body);

    if(user){
        return res.status(200).json({
            status:"Success",
            user
        })
    }else{
        return res.status(400).json({
            status:"Fail",
            message:"Something went Wrong !!"
        })
    }
  };

  exports.loginUser =  async (req, res) => {
   
    if(req.body.email==="" || req.body.password===""){
        return res.status(400).json({
                    status:"Fail",
                    message:"Invalida Credentials"
                })
    }
    let user= await userModel.findOne({email: req.body.email}); 

    if(!user){
        return res.status(404).json({
            status:"Fail",
            message:"User Not Found !!"
        })
    }

    if(user.password===req.body.password){

        const token=jwt.sign({id:user._id}, process.env.JWTKEY);
      
        return res.status(200).json({
            status:"Success",
            token
        })

    }else{
        return res.status(400).json({
            status:"Fail",
            message:"Invalida Email Password !!"
        })
    }
     
    //  user=await userModel.create({$and:[{email:req.body.email},{password:req.body.password}]});

    // if(user){
    //     return res.status(200).json({
    //         status:"Success",
    //         user
    //     })
    // }else{
    //     return res.status(400).json({
    //         status:"Fail",
    //         message:"Something went Wrong !!"
    //     })
    // }
  };
