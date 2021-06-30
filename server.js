const express = require("express");
const connectDB = require("./config/db");
const app = express();


// Middleware
// app.use(app.router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to database
connectDB();

// routes
app.use("/api/post",require("./routes/api/post"));
app.use("/api/profile",require("./routes/api/profile"));
app.use("/api/users",require("./routes/api/users"));


// Port
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(" ==> Listening to Port " + PORT);
});
