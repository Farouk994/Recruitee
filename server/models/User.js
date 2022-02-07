const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
   firstName: {
      type: String,
      required: true,
   },
   lastName: {
      type: String,
      required: true,
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

const user = mongoose.model("user", User);

module.exports = user;
