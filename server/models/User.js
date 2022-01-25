const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   firstName: {
      type: String,
      required: true,
      // unique: true,
   },
   lastName: {
      type: String,
      required: true,
      // unique: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   },
   secret: {
      type: String,
      trim: true,
      required: true,
   },
   // username: {
   //    type: String,
   //    unique: true,
   // },
   experience: {
      type: String,
   },
   description: [],
   avatar: {
      type: String,
      default:
         "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
   },
   // profile: { type: mongoose.Schema.ObjectId, ref: "recruiter" },
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
   image: {
      url: String,
      public_id: String,
   },

   bio: {
      type: String,
   },
   followers: [],
   date: {
      type: Date,
      default: Date.now(),
   },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
