import React, { useState, useEffect } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJob] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .get("http://localhost:4000/api/job/")
        .then((res) => {
          setJob(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {jobs.map((job) => {
          return <li>{job.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Jobs;
