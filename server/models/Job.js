const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
   recruiter: {
      type: mongoose.Schema.ObjectId,
   },
   title: {
      type: String,
   },
   company: {
      type: String,
   },
   title: {
      type: String,
   },
   avatar: {
      type: String,
   },
   location: {
      type: String,
   },
   likes: [
      {
         user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
         },
         date: {
            type: Date,
            default: Date.now,
         },
      },
   ],
   applications: [
      {
         user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
         },
         date: {
            type: Date,
            default: Date.now,
         },
         interest: {
            type: String,
         },
      },
   ],
   salary: {
      type: Number,
   },
   description: {
      type: String,
   },
   recruiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "recruiter",
   },
   date: {
      type: Date,
      default: Date.now,
   },
});

const Jobs = mongoose.model("job", JobSchema);

module.exports = Jobs;
