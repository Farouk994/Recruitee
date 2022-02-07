const Job = require("../models/Job");
const User = require("../models/User");

// Post new Job
const postNewJob = async (req, res) => {
   const { title, company, location, salary, description } = req.body;
   if (!title) res.status(400).send("Title is required");
   if (!company) res.status(400).send("Company is required");
   if (!location) res.status(400).send("Location is required");
   if (!salary) res.status(400).send("Salary is required");
   if (!description) res.status(400).send("Description is required ");

   try {
      const user = await User.findById(req.user.id).select("-password");
      console.log(user.firstName);

      const newJob = new Job({
         title,
         company,
         location,
         salary,
         description,
         user: req.user.id,
         name: `${user.firstName} ${user.lastName}`,
      });
      const job = await newJob.save();
      res.json(job);
   } catch (err) {
      console.log(err.message);
      res.status(500).send(
         "Something went wrong while making request to post job"
      );
   }
};

// Get all Jobs
const getAllJobs = async (req, res) => {
   try {
      const jobs = await Job.find({});
      res.json(jobs);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error, failed to fetch data");
   }
};

// Get all Jobs by User
const getJobsByUser = async (req, res) => {
   try {
      const jobs = await Job.find({ user: req.params.id }).sort({ date: -1 });
      console.log(jobs);
      if (!jobs)
         return res.status(400).send("No jobs at the moment, post job here");
      res.json(jobs);
   } catch (err) {
      console.log(err.message);
      res.status(500).send(
         "Something went wrong while getting jobs for this user"
      );
   }
};

// Get Job By id
const getJobById = async (req, res) => {
   try {
      const job = await Job.findById(req.params.id);
      if (!job) return res.status(400).send("Job not found");
      res.json(job);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error, problem fetching this job");
   }
};

// Apply for job
const applyForJob = async (req, res) => {
   try {
      const user = await User.findById(req.user.id).select("-password");
      const job = await Job.findById(req.params.id);

      // check if job was already applied
      if (
         job.applications.some((apply) => apply.user.toString() === req.user.id)
      ) {
         return res.status(400).send("You already applied for this Job!");
      }
      // Add job to array
      job.applications.unshift({ user: req.user.id, name: user.firstName });

      await job.save();
      return res.json(job.applications);
   } catch (err) {
      console.log(err.message);
      res.status(400).send("Server Error, couldn't apply for a job right now");
   }
};

// Like Job

//

module.exports = { postNewJob, getAllJobs, getJobById, applyForJob, getJobsByUser};
