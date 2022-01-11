const express = require("express");
const router = express.Router();
const Recruiter = require("../models/Recruiter");
const jwt = require("jsonwebtoken");
const {
   hashPassword,
   comparePassword,
} = require("../helpers/auth");

export const register = async (req, res) => {
  // Data from body
//   console.log("Register Data: ", req.body)
  const { name, email, password,secret  } = req.body;
  // validation
  if (!name) return res.status(400).send("Name is required!");
  if (!password || password.length < 6)
     return res
        .status(400)
        .send("Password is required and should be 6 characters long!");
  if (!secret) return res.status(400).send("Answer is required!");

  //    Check if email exists, if it does return error
  const exist = await Recruiter.findOne({ email });
  if (exist) return res.status(400).send("Email is taken");
  if (!email) return res.status(400).send("Email is required");

  //    hash Password
  const hashedPassword = await hashPassword(password);

  const recruiter = new Recruiter({
     name,
     email,
     password: hashedPassword,
     secret,
  });
  try {
     await recruiter.save();
     console.log("Recruiter has now been registered ==>", recruiter);
     return res.json({
        ok: true,
     });
    //  console.log(recruiter)
  } catch (err) {
     console.log("REGISTRATION FAILED", err.message);
     return res.status(400).send("Error, Try Again");
  }
};

export const login = async (req, res) => {
  // find recruiter hash password already saved in database and compare with the client password
  try {
     // find recruiter with email, check db
     const { email, password } = req.body;
     const recruiter = await Recruiter.findOne({ email });
     if (!recruiter) return res.status(400).send("Invalid Credentials");

     // check password
     const match = await comparePassword(password, recruiter.password);
     if (!match) return res.status(400).send("Invalid Credentials");

     // create signed token
     // /find recruiter _id in token, generate token
     const token = jwt.sign({ _id: recruiter._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
     });
     // Just to make sure we are not sending recruiter password and secret in token
     recruiter.password = undefined;
     recruiter.secret = undefined;

     // send response as json, all recruiter info will be sent except password and secret
     res.json({ token, recruiter });
  } catch (err) {
     console.log(err);
     return res.status(400).send("Error, please try again");
  }
};

