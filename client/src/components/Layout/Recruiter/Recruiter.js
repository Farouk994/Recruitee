import React from "react";
import { Link} from "react-router-dom";
import "./Recruiter.css"

const Recruiter = () => {
  return (
    <div>
  <section className='landing2'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>
              {" "}
              <em>Become a Recruitee+ </em>{" "}
            </h1>
            <p className='lead'>
              Join 10,000+ recruiters today and make the best impact
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

export default Recruiter;
