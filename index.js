const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT||3002;
const uri = process.env.MONGO_URL;




const app = express();


// Connect with database
const connectDB = async(uri)=>{
    await mongoose.connect(uri);
}


app.listen(PORT , async()=>{
    console.log("Successfully created the server");
    console.log("Try Connnecting to DB");
    await connectDB(uri);
    console.log("Connected with db Successfully");
});