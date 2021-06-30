const express = require("express");
const router = express.Router();

router.get("/post",(req,res)=>{
    res.send("<h1>Member</h1>")
});

module.exports = router;