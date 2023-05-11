require('dotenv').config();
const express=require("express");
const app=express();
const client = require('twilio')(process.env.accountSid, process.env.authToken);

const port=process.env.PORT;


function sendTextMessage(){
    client.messages
  .create({
     body: "Hello there!! we're trying to connect you from node",
     from: process.env.TWILIO_PHONE_NUMBER,
     to: process.env.CELL_PHONE_NUMBER
   })
  .then(message => console.log(message));

}

app.get("/",(req,res)=>{
    sendTextMessage();
    res.send("Succesfull");
})

app.listen(port,()=>{
    console.log(`server running at ${port}`);
})

