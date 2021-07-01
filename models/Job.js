const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
  },
  company: {
    type: String,
  },
  name: {
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
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Jobs = mongoose.model("Job", JobSchema);

module.exports = Jobs;
