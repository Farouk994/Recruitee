const express = require("express");
const router = express.Router();

router.get("/profile",(req,res)=>{
    res.send("<h1>All Members</h1>")
});

module.exports = router;