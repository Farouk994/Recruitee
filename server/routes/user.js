const express = require("express");
const {
   getUsers,
   getUserInfoWithToken,
   getUserById,
   // buildProfile,
   getUserProfile,
} = require("../controllers/userController");
const checkObjectId = require("../middleware/checkObjectId");
const verifyJWT = require("../middleware/verifyJWT");
const router = express.Router();

router.get("/user/all", verifyJWT, getUsers);

router.get("/user/auth", verifyJWT, getUserInfoWithToken);

router.get("/user/:id", verifyJWT, checkObjectId("id"), getUserById);

// router.post("/user/profile", verifyJWT, buildProfile);

// router.get("/user/my-profile/:user_id", checkObjectId("id"), verifyJWT, getUserProfile);

module.exports = router;
