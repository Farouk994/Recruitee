const express = require("express");
const router = express.Router();
const {
   register_recruiter,
   recruiter_login,
   getRecruiterByToken,
} = require("../controllers/recruiter_auth");
const auth = require("../middleware/auth");

router.post("/recruiter/register/account", register_recruiter);
router.post("/recruiter/login/account", recruiter_login);
router.get("/recruiter/current", auth, getRecruiterByToken);

module.exports = router;

