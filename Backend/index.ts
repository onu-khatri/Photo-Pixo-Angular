const express = require('express');
const app = express()

app.get('/',(req:any,res:any)=>{
    console.log(req);
    res.send("hello world home route");
})

app.listen(5000,()=>{
    console.log("server start");
})