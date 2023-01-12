const express=require('express');
const router = express.Router();

const {registerUser, loginUser}=require("../controllers/userController");

router.get("/", async(req,res)=>{
    res.status(200).json({
        message:"hello"
    })
});

router.post('/register', registerUser);
router.post('/login', loginUser);



module.exports=router;