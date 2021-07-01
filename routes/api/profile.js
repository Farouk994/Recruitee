const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Job = require("../../models/Job");

// @route GET api/profile/me
// @route Private
// Get User profile
router.get("/me", auth, async (req, res) => {
  try {
    // User can access their accounts with a token
    // and i populated the res with names and avatar
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"], User);
    console.log(profile);

    // If there is no profile
    if (!profile) {
      return res
        .status(400)
        .json({ msg: "There is no profile for this user, try again" });
    }
    profile.save();
    res.json(profile);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route GET api/users/
// @DESC get PROFILE by UserID
// @access Public
// Route for finding all user Profiles
router.get("/", auth, async (req, res) => {
  try {
    const profile = await Profile.find().populate(
      "user",
      ["name", "avatar"],
      User
    );
    res.json(profile);
    console.log(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server has an Error");
  }
});

// @route /api/profile/
// @desc POST or update user profile
// @route Private
router.post(
  "/",
  auth,
  // Validation of skills and status of user
  check("status", "Status is required").not().isEmpty(),
  // check("skills", "skills is required").isEmpty(),

  async (req, res) => {
    // When using validation, its good to check for errors and return errors array
    // with the above messages
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // This is obj destructuring that enables MongoDB
    // handle multiple req from the body and update the the profile model which
    // is now linked to the user model
    const {
      website,
      skills,
      githubusername,
      facebook,
      twitter,
      instagram,
      github,
      linkedin,
      status,
      location,
      company,
      bio,
      experience,
    } = req.body;

    // Build Profile Obj
    // Whateva the user sends will be stored in this obj that we will be using
    // to update the user profile
    const profileFields = {};
    // get User.id => connect the user input info to the user id
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    // if (skills) {
    //   console.log("eagle");
    //   console.log("Boss");
    //   profileFields.skills = skills
    //     .split(",")
    //     .map((skill) => " " + skill.trim());
    //   console.log(skill);
    // }

    // Build Social Obj
    FIXME: profileFields.social = {};
    if (github) profileFields.social.github = github;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    // Now lets connect to the Mongo Database
    try {
      // This statement is basically saying that findOne User(withToken, userID) and if its
      // that specific users profile, (findOneAndUpdate) with the profilefields obj
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      // Create Profile and save it inside the databse
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      res.status(500).send("Server Error");
    }
    res.send("Profile Created");
  }
);

// @route PUT api/profile/save/:id
// @desc save job
// @route Private


// @route /api/

module.exports = router;
