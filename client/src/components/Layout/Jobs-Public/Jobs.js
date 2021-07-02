import React, { useState, useEffect } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJob] = useState([]);

  useEffect(() => {
    async function fetchData() {
     await axios
        .get("http://localhost:4000/api/job/")
        .then((res) => {
          setJob(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      {jobs.map((job) => {
        return (
          <ul >
            <li>Title : {job.title}</li>
            <li>Company : {job.company}</li>
            <li>Salary : {job.salary}</li>
            <li>Description: {job.description}</li>
            <li>Recruiter : {job.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Jobs;
