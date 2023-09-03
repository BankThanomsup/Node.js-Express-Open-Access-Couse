//Import module

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require('path');
const debug = require('debug')('app');
const chalk = require("chalk");
const morgan = require('morgan');


app.use(morgan('combined'));

app.use(express.static(path.join(__dirname,"/public/")))

app.get("/",(req,res) =>{

    res.render('index',{username:'Bankza55+', customers:["kitti","Kittikon","Kitty"]});
})

app.listen(PORT, ()=>{
   debug("Listening on port" + chalk.red(" : " + PORT));
})

app.set("views","./src/views");
app.set("view engine" ,"ejs")