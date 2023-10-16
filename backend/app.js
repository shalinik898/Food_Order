const express = require("express");
const app=express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

const {MONGOURI,PORT} = require("./key");

//connect to mongo
mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("Connected to mongodb");
})

mongoose.connection.on('error',()=>{
    console.log("Error connecting db");
})

require('./models/user');

app.use(express.json());
app.use(require('./routes/user'));
mongoose.model('User');




app.listen(PORT,()=>{
    console.log("Server is listening on port"+ PORT);
})