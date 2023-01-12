const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const userRoutes=require("./Routes/userRoutes");

const postRoutes=require("./Routes/postRoutes");

dotenv.config();
const app=express();
app.use(bodyParser());

mongoose.connect(process.env.mongoDB_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then((data)=>{
   console.log(`Mongo DB Connected :${data.connection.host}`);
})

app.use('/', userRoutes);

app.use('/', postRoutes);


app.listen(3000, ()=> console.log('Server is up at PORT : 3000'));


