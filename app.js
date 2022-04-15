const express = require("express");
const app = express();

const path = require("path");
const route = require("./server/router/router");
app.use(express.json());

//serving static files
app.use(express.static('public'))

//setup view engine
app.set('view engine','ejs');

//connect mongodb database
require("./server/database/database")();

//calling routes
app.use('/',route);
app.listen(3000, (req,res) =>{
    console.log("listening to port 3000");
})