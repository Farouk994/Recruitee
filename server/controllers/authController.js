const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const handleLogin = async (req, res) => {
   const { email, password } = req.body;
   if (!email || !password)
      return res.status(401).send("Email and password are required.");
   if (!email) return res.status(401).send("Invalid Credentials at email");
   try {
      let user = await User.findOne({ email });

      if (!user) {
         return res.status(400).send("Invalid Credentials");
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
         return res.status(400).send("Invalid Credentials");
      }

      const payload = {
         user: {
            id: user.id,
         },
      };

      jwt.sign(
         payload,
         process.env.ACCESS_TOKEN_SECRET,
         { expiresIn: "5 days" },
         (err, token) => {
            if (err) throw err;
            res.json({ token, user });
         }
      );
   } catch (err) {
      console.log(err.message);
      res.status(400).send("Something went wrong");
   }
};

module.exports = { handleLogin };
