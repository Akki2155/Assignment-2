const postModel=require('../models/postModel');


exports.createPost= async(req,res)=>{

    if(req.body.title===""||req.body.body===""|| req.body.img===""){
        return res.status(400).json({
            status:"Fail",
            message:"Invalid credentials"
        })
    }

    const post=req.body;
    const newPost=await postModel.create({...post, user:req.user});

    if(newPost){
        return res.status(200).json({
            status:"Success",
            newPost
        })
    }else{
        return res.status(500).json({
            status:"Success",
            message:"Something went Wrong"
        })
    }


}

exports.updatePost= async(req,res)=>{

    const detail=req.body;

    const post=await postModel.findById(req.params.id);
    if(!post){
        return res.status(404).json({
            status:"Fail",
            message:"Post Not Found"
        })
    }
    const newPost=await postModel.findByIdAndUpdate(req.params.id,{...detail});

    if(newPost){
        return res.status(200).json({
            status:"Success",
            newPost
        })
    }else{
        return res.status(500).json({
            status:"Success",
            message:"Something went Wrong"
        })
    }


}


exports.deletePost= async(req,res)=>{

    const post=await postModel.findById(req.params.id);
    if(!post){
        return res.status(404).json({
            status:"Fail",
            message:"Post Not Found"
        })
    }
    const newPost=await postModel.findByIdAndDelete(req.params.id);

    if(newPost){
        return res.status(200).json({
            status:"Success",
            message:"SuccessFully Deleted"
        })
    }else{
        return res.status(500).json({
            status:"Success",
            message:"Something went Wrong"
        })
    }
}

exports.fetchPost= async(req,res)=>{

    const post=await postModel.findById(req.params.id);
    if(!post){
        return res.status(404).json({
            status:"Fail",
            message:"Post Not Found"
        })
    }
    const newPost=await postModel.findById(req.params.id);

    if(newPost){
        return res.status(200).json({
            status:"Success",
            newPost
        })
    }else{
        return res.status(500).json({
            status:"Success",
            message:"Something went Wrong"
        })
    }
}