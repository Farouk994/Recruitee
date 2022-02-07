const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recruiter = new Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: "user",
   },
   status: {
      type: String,
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
   },
   bio: {
      type: String,
   },
   image: {
      url: String,
      public_id: String,
   },
   followers: [{ type: Schema.Types.ObjectId, ref: "user" }],
   date: {
      type: Date,
      default: Date.now(),
   },
});

const recruiter = mongoose.model("recruiter", Recruiter);

module.exports = recruiter;
