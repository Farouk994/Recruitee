const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Job = new Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: "user",
   },
   users: {
      type: String,
   },
   title: {
      type: String,
      // required: true,
   },
   company: {
      type: String,
      // required: true,
   },
   name: {
      type: String,
   },
   logo: {
      url: String,
      public_id: String,
   },
   location: {
      type: String,
      // required: true,
   },
   id: {
      type: String,
   },
   firstName: {
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
         name: {
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
   date: {
      type: Date,
      default: Date.now(),
   },
});

const job = mongoose.model("job", Job);

module.exports = job;
