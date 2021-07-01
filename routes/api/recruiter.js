// Routes needed
// 1  Get Recruiter Profile
// 2. Create Profile
// 3. Post jobs / Update
// 4. Delete Jobs
// 5. View User Profiles
// 6. Comment on User Profile

// Profile
// 1. Get profile
// 2. Create Profile
// 3. Get Jobs
// 4. Add job to liked

const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Recruiter = require("../../models/Recruiter");
const Job = require("../../models/Job");

// Get all jobs
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ date: -1 });
    res.json(jobs);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});


module.exports = router;