//import mongoose library
const mongoose = require('mongoose');

//create mongoose schema with userSchema
const userSchema = new mongoose.Schema({
    //define the properties of 
    name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    }

})

//create a model 'User'
mongoose.model("User",userSchema);
