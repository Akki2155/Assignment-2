const mongoose=require("mongoose");

const postSchema=mongoose.Schema({

    title:{type:String},
    body:{type:String},
    img:{type:String},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

});

const postModel=mongoose.model('post', postSchema);

module.exports=postModel;