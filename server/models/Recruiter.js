const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const RecruiterSchema = new mongoose.Schema({
   recruiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "recruiter",
   },
   name: {
      type: String,
      trim: true,
      required: true,
   },
   email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
   },
   secret: {
      type: String,
      trim: true,
      required: true,
   },
   about: {},
   photo: String,
   goals: String,
   company: {
      type: String,
   },
   website: {
      type: String,
   },
   location: {
      type: String,
   },
   status: {
      type: String,
   },
   description: {
      type: String,
   },
   salary: {
      type: String,
   },
   social: {
      email: {
         type: String,
      },
      linkedin: {
         type: String,
      },
   },
//    profile: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "profile",
//  },

   date: {
      type: Date,
      default: Date.now,
   },
});

const Recruiter = mongoose.model("recruiter", RecruiterSchema);

module.exports = Recruiter;
