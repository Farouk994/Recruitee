const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
// const Post = require("../../models/Post");

router.get("/profile",(req,res)=>{
    res.send("<h1>All Members</h1>")
});

module.exports = router;