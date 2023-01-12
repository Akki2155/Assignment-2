const jwt=require('jsonwebtoken');

exports.Auth=async(req,res,next)=>{
    const token=req.headers.authorization;
    if(!token){
        return res.status(401).json({
            status:"Fail",
            message:"Need to sign in For this resource"
        })
    }

    let decodeID=jwt.verify(token, process.env.JWTKEY)

    if(decodeID){
        req.user=decodeID.id;
        next();
    }else{
        return res.status(400).json({
            status:"Fail",
            message:"Something went Wrong"
        })
    }
    

}