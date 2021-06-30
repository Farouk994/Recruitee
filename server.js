const express = require("express");
const connectDB = require("./config/db")
const mongoose = require("mongoose");

// Middleware
const app = express();

app.use(express.json());

// connect to database
connectDB();

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(" ==> Listening to Port 3000");
});
