const express = require("express");
const router = express.Router();
const { register, uploadImage } = require("../controllers/registerController");
const { handleLogin } = require("../controllers/authController");
const { handleRefreshToken } = require("../controllers/refreshToken");
const formidable = require("express-formidable");

router.post("/register/account", register);
router.post("/login/account", handleLogin);
router.get("/refresh", handleRefreshToken);
router.post(
   "/upload-image",
   formidable({ maxFileSize: 5 * 1024 * 1024 }),
   uploadImage
);

module.exports = router;
