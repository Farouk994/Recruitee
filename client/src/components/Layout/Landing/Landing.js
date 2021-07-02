import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>
              {" "}
              <em>Recruitee+</em>{" "}
            </h1>
            <p className='lead'>
              Join the community to find the job that suites and also become a
              recruiter today
            </p>
            <div className='buttons'>
              <Link to='/register' className='btn btn-primary btn-lg'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-light btn-lg'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
