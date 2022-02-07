const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");
// const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser")

require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));

// middleware for cookies
// app.use(cookieParser())

readdirSync("./routes").map((r) => {
   app.use("/api", require(`./routes/${r}`));
});

// app.use(verifyJWT); 

const PORT = process.env.PORT;

app.listen(PORT, () => {
   console.log(`Listening to Port ${PORT}`);
});

mongoose
   .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      //   useFindAndModify: false,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
   })
   .then(() => {
      console.log("DB has been connected ===>");
   })
   .catch((err) => {
      console.log("Connection failed X", err.message);
   });
