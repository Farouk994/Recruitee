const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Job = require("../../models/Job");
const User = require("../../models/User");
const Recruiter = require("../../models/Recruiter");

// @route /api/job/
// @desc Create a Job Posting
// @access Private

router.post(
  "/",
  [
    auth,
    check("company", "company is required").notEmpty(),
    check("description", "description is required").notEmpty(),
    check("salary", "salary is required").notEmpty(),
    check("title", "title is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      console.log(user);
      const newJob = new Job({
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        salary: req.body.salary,
        description: req.body.description,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      console.log(newJob);
      const job = await newJob.save();
      res.json(job);
      console.log(job);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error issue");
    }
  }
);

// @route GET api/job
// @route Get all Jobs
// @route Private

router.get("/", auth, async (req, res) => {
  try {
    const job = await Job.find().sort({ date: -1 });
    res.json(job);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route GET api/job/:id
// @route Get a Job
// @route Private
router.get("/:id", auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ msg: "Job not found" });
    }
    res.json(job);
    console.log(job);
  } catch (err) {
    console.log(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Job not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route Delete api/job/:id
// @route Delete a Job
// @route Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ msg: "Job not found" });
    }
    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User Not Authorised" });
    }
    await job.remove();
    res.json({ msg: "Job Removed" });
  } catch (err) {
    console.log(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Job not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
