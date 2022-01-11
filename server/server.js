const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");
const { readdirSync } = require("fs");

// Middleware
// app.use(app.router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));

// connect to database
connectDB();

// auto-load routes
readdirSync("./routes").map((r) => {
   app.use("/api", require(`./routes/${r}`));
});

// Port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
   console.log(" ==> Listening to Port " + PORT);
});
