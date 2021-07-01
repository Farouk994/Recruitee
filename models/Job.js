const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "recruiter",
  },
});

const Jobs = mongoose.model("Jobs", JobSchema);

module.exports = Jobs;
