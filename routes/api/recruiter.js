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
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Recruiter = require("../../models/Recruiter");
const Job = require("../../models/Job");
const User = require("../../models/User");

// @route api/recruiter/
// @desc Get Recruiter
// Private
router.get("/me", auth, async (req, res) => {
  try {
    const recruiter = await Recruiter.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"], User);
    console.log(recruiter);

    if (!recruiter) {
      return res
        .status(400)
        .json({ msg: "There is no profile for this user, try again later" });
    }
    res.json(recruiter);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route GET api/users
// @DESC get PROFILE by UserID
// @access Public
// Route for finding all user Profiles
TODO: router.get("/profile", async (req, res) => {
  try {
    const recruiter = await Recruiter.find().populate(
      "user",
      ["name", "avatar"],
      User
    );
    res.json(recruiter);
    // console.log(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server has an Error");
  }
});

// @route api/recruiter/
// @desc Create User Profile
// @Private
router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { website, linkedin, status, location, company, bio, email } = req.body;

  const profileFields = {};
  // get User.id => connect the user input info to the user id
  profileFields.user = req.user.id;
  if (company) profileFields.company = company;
  if (website) profileFields.website = website;
  if (location) profileFields.location = location;
  if (bio) profileFields.bio = bio;
  if (status) profileFields.status = status;

  profileFields.social = {};
  if (email) profileFields.social.email = email;
  if (linkedin) profileFields.social.linkedin = linkedin;

  try {
    let recruiter = await Recruiter.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.json(recruiter);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route api/recruiter/profile/:id
// @desc Get Recruiter Profile
// @Private
router.get("/:user_id", auth, async (req, res) => {
  try {
    const recruiter = await Recruiter.findOne({
      user: req.params.user_id,
      // Get Recruiter Profile
    }).populate("user", ["name", "avatar"], User);
    res.json(recruiter);
    if (!recruiter) {
      res.status(400).json({ msg: "Recruiter Not Found" });
    }
    console.log(recruiter);
  } catch (err) {
    if (err.kind === "ObjectId") {
      res.status(400).json({ msg: "Recruiter Not Found" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/////////////////////////////////////////////////////////////////////////////

// @route api/recruiter/jobs
// @desc Get all jobs array
// @Public
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ date: -1 });
    res.json(jobs);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route GET api/recruiter/all
// @DESC get all Recruiters
// @access Public
// Route for finding all Recruiter Profiles
router.get("/all", async (req, res) => {
  try {
    const recruiter = await Recruiter.find().populate(
      "user",
      ["name", "avatar"],
      User
    );
    res.json(recruiter);
    console.log(recruiter);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server has an Error");
  }
});

module.exports = router;
