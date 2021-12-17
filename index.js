const dotenv=require('dotenv'); 
dotenv.config({ path: './env' });

dotenv.config();

const express=require("express");
const app=express();

app.get('/',(req,res)=>{
  res.send(`This is a sample nodejs webapp created by Shishir #version3 ! IP address of the server is ${process.env.IP_ADDRESS}`);
});


app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(`Error: ${err.message}`);
    }else{
        console.log(`Listening on port ${process.env.PORT}`);
    }
  }
)
