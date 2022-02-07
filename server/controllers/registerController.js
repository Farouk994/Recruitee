const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// bring in normalize to give us a proper url, regardless of what user entered
// const normalize = require("normalize-url");
const cloudinary = require("cloudinary");

require("dotenv").config();

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

const register = async (req, res) => {
   const {
      firstName,
      lastName,
      email,
      password,
      bio,
      location,
      experience,
      company,
      website,
      image,
   } = req.body;
   if (!firstName) return res.status(400).send("First Name is required");
   if (!lastName) return res.status(400).send("Last Name is required");
   if (!password || password.length < 6)
      return res.status(400).send("Password should be 6 characters long");
   const exist = await User.findOne({ email });
   if (exist) return res.status(400).send("Email is already in use, try again");
   if (!email) return res.status(400).send("Email is required");

   try {
      let user = await User.findOne({ email });

      if (user) {
         return res.status(400).send("User already exists");
      }

      user = new User({
         firstName,
         lastName,
         email,
         password,
         bio,
         location,
         experience,
         company,
         website,
         image,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

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
            res.json({ token });
            // console.log(user);
         }
      );
   } catch (err) {
      console.log(err.message);
      res.status(500).json("Something went wrong while making request");
   }
};

// Upload Image
const uploadImage = async (req, res) => {
   try {
      const result = await cloudinary.uploader.upload(req.files.image.path);
      res.json({
         url: result.secure_url,
         public_id: result.public_id,
      });
   } catch (err) {
      console.log(err.message);
   }
};

module.exports = { register, uploadImage };
