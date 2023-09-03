//Import module

const express = require('express');
const chalk = require('chalk')
const morgan = require('morgan');
const app = express();
const port = 3000;
console.log(chalk.blue('Hello world!'))


app.get("/",(req,res) =>{

    res.send('hello thitikorn thanomsup');
})

app.listen(port, ()=>{
    console.log(chalk.red("Welcome"))
})