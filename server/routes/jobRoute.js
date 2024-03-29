const express = require("express");
const {
   postNewJob,
   getAllJobs,
   getJobById,
   applyForJob,
   getJobsByUsers,
   getJobsByUserID,
} = require("../controllers/jobController");
const checkObjectId = require("../middleware/checkObjectId");
const verifyJWT = require("../middleware/verifyJWT");
const router = express.Router();

router.get("/job/all", verifyJWT, getAllJobs);

router.get("/job/:id", verifyJWT, getJobById);

router.post("/job/new", verifyJWT, postNewJob);

router.put("/job/apply/:id", verifyJWT, checkObjectId("id"), applyForJob);

router.get("/jobs/user/:id", verifyJWT, getJobsByUsers);

router.get("/jobs/job-posts/", verifyJWT, getJobsByUserID);

// router.get("/job/by-user", verifyJWT, getAllJobsByUser);

module.exports = router;
