import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const JobCard = () => {
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
    <div>
      {jobs.map((job) => {
        return (
          <>
            <ul>
              <br></br>
              <li>
                Title : <h5>{job.title}</h5>
              </li>
              <li>
                Company : <h5>{job.company}</h5>
              </li>
              <li>
                Salary : <strong>{job.salary}</strong>
              </li>
              <li>
                Description: <strong>{job.description}</strong>
              </li>
              <li>
                Recruiter : <strong>{job.name}</strong>
              </li>
              <Link to='/login'>
                <button className='btn btn-primary'>Save</button>
              </Link>
              <hr></hr>
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default JobCard;
