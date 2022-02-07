const express = require("express");
const { handleRefreshToken } = require("../controllers/refreshToken");
const verifyJWT = require("../middleware/verifyJWT");
const router = express.Router();

router.get("/refresh", handleRefreshToken);

module.exports = router;
