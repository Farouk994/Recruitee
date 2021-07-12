const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Job = require("../../models/Job");
const User = require("../../models/User");
const Recruiter = require("../../models/Recruiter");
const checkObjectId = require("../../middleware/checkObjectId");
const Jobs = require("../../models/Job");

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
// @desc Get all Jobs
// @route Public for now

router.get("/", async (req, res) => {
  try {
    const job = await Job.find().sort({ date: -1 });
    console.log(job);
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

// @route api/job/recruiter/:id
// @desc Get all jobs by recuiter
// @access Private
router.get("/recruiter/:id", auth, async (req, res) => {
  try {
    const jobs = await Jobs.find({ user: req.params.id }).sort({ date: -1 });
    console.log(jobs);
    if (!jobs) {
      return res
        .status(400)
        .json({ msg: "There are no jobs right now, try again" });
    }
    res.json(jobs);
  } catch (err) {
    res.status(500).send("Server Error Issue");
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

// @route   api/job/apply/:id
// @desc    Apply for job in one click
// @access  Private

router.post(
  "/save/:id",
  [auth, [check()]],
  checkObjectId("id"),
  async (req, res) => {
    try {
      // Find job associated with user and also find the user by id
      const user = await User.findById(req.user.id).select("-password");
      const job = await Job.findById(req.params.id);

      const newApplication = {
        text: req.body.text,
        name: req.user.name,
        avatar: user.avatar,
        user: req.user.id,
        interest: `Hi, my name is ${user.name}, I am interested in the position of joining ${job.company} as a ${job.title}. My profile is //link//, please review it and let me know i would be a great fit for this position. Thank you `,
      };
      if (
        job.applications.some(
          (application) => application.user.toString() === req.user.id
        )
      ) {
        return res
          .status(400)
          .json({ msg: "You already applied for this job" });
      }
      job.applications.unshift(newApplication);
      await job.save();
      res.json(job.applications);
    } catch (err) {
      res.status(500).send("Server Error");
    }
  }
);

// @route    PUT api/job/like/:id
// @desc     Like a job
// @access   Private
router.put("/like/:id", auth, checkObjectId("id"), async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    // Check if the post has already been liked
    if (job.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: "Job already liked" });
    }

    job.likes.unshift({ user: req.user.id });

    await job.save();

    return res.json(job.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route PUT api/job/unlike/:id
// @route unLike a job
// @route Private
router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    // If job exists
    if (!job) {
      return res.status(404).json({ msg: "Job not found" });
    }
    // Check if job has already been liked
    if (
      job.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Job has not been liked" });
    }

    // job.likes.unshift({ user: req.user.id });

    // GET remove index
    const removeIndex = job.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);
    job.likes.splice(removeIndex, 1);
    await job.save();

    res.json(job.likes);
  } catch (err) {
    console.log(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Job not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
