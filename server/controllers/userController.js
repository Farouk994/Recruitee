const User = require("../models/User");
const Profile = require("../models/Recruiter");

// Get All Users
const getUsers = async (req, res) => {
   try {
      const users = await User.find({}).sort({ date: -1 }).select("-password");
      res.json(users);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Something went wrong while fetching all users");
   }
};

// Get User with Token
const getUserInfoWithToken = async (req, res) => {
   try {
      const user = await User.findById(req.user.id).select("-password");
      res.json({ ok: true });
   } catch (err) {
      console.log(err.message);
      res.status(400).send("Something went wrong making request");
   }
};

// Get user by id
const getUserById = async (req, res) => {
   try {
      const user = await User.findById(req.params.id).select("-password");
      if (!user) return res.status(400).send("User has not been found");
      res.json(user);
      console.log(user);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Something went wrong getting user by ID");
   }
};

// Build User Profile
const updateProfile = async (req, res) => {
   const { bio, location, experience, company, website, image } = req.body;

   if (!bio) return res.status(400).send("Bio is required!");
   if (!location) return res.status(400).send("Location is required!");
   if (!website) return res.status(400).send("Website is required!");
   if (!company) return res.status(400).send("Company is required!");
   if (!experience) return res.status(400).send("Experience is required!");
   // if (!image) return res.status(400).send("Image is required!");

   try {
      const profileFields = {
         bio,
         location,
         experience,
         company,
         website,
         image,
      };
      let profile = await Profile.findOneAndUpdate(
         { user: req.user.id },
         { $set: profileFields },
         { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      return res.json(profile);
   } catch (err) {
      console.log(err.message);
      res.status(400).send("Something went wrong while building profile");
   }
};

// Upload Image

// Get User Profile
const getUserProfile = async ({ params: { user_id } }, res) => {
   // try {
   //    const profile = await Profile.findOne({ user: req.user.id }).populate(
   //       "user",
   //       ["name", "email"]
   //    );
   //    console.log(profile);
   //    if (!profile) return res.status(400).send("Profile not found");
   //    res.json(profile);
   // } catch (err) {
   //    console.log(err.message);
   //    res.status(400).send(
   //       "Something went wrong while making this request, please try again"
   //    );
   // }
   try {
      const profile = await Profile.findOne({
         user: user_id,
      }).populate("user", ["name", "email"]);

      if (!profile) return res.status(400).json({ msg: "Profile not found" });

      return res.json(profile);
   } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server error" });
   }
};

module.exports = {
   getUsers,
   getUserInfoWithToken,
   getUserById,
   updateProfile,
   getUserProfile,
};
