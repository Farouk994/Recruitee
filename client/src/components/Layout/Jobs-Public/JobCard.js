import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Jobs.css"

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
          <br></br>
            <div className='card'>
              <ul className="box lead">
              
                <li>
                  Position : <h5>{job.title}</h5>
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
                  Recruiter Details: <strong>{job.name}</strong>
                </li>
              </ul>
                <Link to='/login'>
                  <button className='btn btn-primary'>Save</button>
                </Link>
            </div>
            <br></br>
          </>
        );
      })}
    </div>
  );
};

export default JobCard;
