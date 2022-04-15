const mongoose = require("mongoose");
const config = require("../../config");

const Connect = async() =>{
    try{
        //mongoodb cloud connection
        const con = await mongoose.connect(config.MONGO_URI, {
            useNewUrlParser:true,
            // useUnifedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex: true
        });
        console.log(`mongoodb connected : ${con.connection.host}`);

    }
    catch(err){
     console.log(err);
     process.exit(1);
    }
}

module.exports = Connect;