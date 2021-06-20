const mongoose = require('mongoose');
//Anything stored in database is model

const Blog = new mongoose.Schema({   //User object conatins "Schema" containing object name "obj" which further conatins the following

    headings: {
        type:String,
        required:true,
    },

    userBlog:{
        type:String,
        required:true,
    },

    userID:{ 
        type: mongoose.SchemaTypes.ObjectId,
    },
    
});
//.model(firstparam,secondparam,thirdparam) , firstparam:refrence for mongodb , secondparam:name of model "user" we wants to export ,thirdparam:table name for database exporting to
module.exports = mongoose.model("userblog",Blog,"userblog");
