const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const RecruiterSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
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
    required: true,
  },
  description: {
    type: String,
  },
  salary: {
    type: String,
  },
  //   jobs: [
  //     {
  //       title: {
  //         type: String,
  //         required: true,
  //       },
  //       company: {
  //         type: String,
  //         required: true,
  //       },
  //       location: {
  //         type: String,
  //       },
  //       salary: {
  //         type: Number,
  //         required: true,
  //       },
  //       description: {
  //         type: String,
  //       },
  //     },
  //   ],
  social: {
    email: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Recruiter = mongoose.model("recruiter", RecruiterSchema);

module.exports = Recruiter;
