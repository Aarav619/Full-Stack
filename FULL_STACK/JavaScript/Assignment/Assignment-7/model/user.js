const mongoose = require('mongoose');
//Anything stored in database is model

const User = new mongoose.Schema({   //User object conatins "Schema" containing object name "obj" which further conatins the following

    firstName: {
        type: String,
        required: true,
    },
    
    lastName: {
        type: String,
        required: true,
    },  
    
    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    dateofBirth:{ 
        type: String, 
        required: true,
    }

});
//.model(firstparam,secondparam,thirdparam) , firstparam:refrence for mongodb , secondparam:name of model "user" we wants to export ,thirdparam:table name for database exporting to
module.exports = mongoose.model("user",User,"user");
