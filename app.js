//Import module

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const chalk = require("chalk");

app.use(express.static(path.join(__dirname,"/public/")))

app.get("/",(req,res) =>{

    res.send('hello thitikorn thanomsup');
})

app.listen(port, ()=>{
    console.log("Listening on port",chalk.red(port));
})