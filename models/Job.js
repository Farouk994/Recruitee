const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
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
        ref: "users",
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
    ref: "users",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Jobs = mongoose.model("Jobs", JobSchema);

module.exports = Jobs;
