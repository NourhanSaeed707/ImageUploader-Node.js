const express = require("express");
const route = express.Router();
const Controller = require("../controller/controller");
const store = require("../middleware/multer");

//routes
route.get('/', Controller.home);

route.post('/uploadmultiple',store.array('images',12) ,Controller.uploads);



 module.exports = route;