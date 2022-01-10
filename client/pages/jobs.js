import React, { useState, useEffect } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import JobCard from "../components/JobCard";
import axios from "axios";
import ReactTooltip from "react-tooltip";

const jobs = () => {
   const [jobs, setJobs] = useState([]);
   // const [okay, setOkay] = useState(false);

   useEffect(() => {
      async function fetchData() {
         const data = await axios
            .get("http://localhost:4000/api/job/")
            .then((res) => {
               setJobs(res.data);
               // console.log(res.data);
            })
            .catch((err) => {
               console.log(err.message, "Something went wrong while fetching");
            });
      }
      fetchData();
   }, []);

   const getTotalApplication = (x) => {};

   return (
      <>
         {jobs.map((job, index) => {
            return (
               <>
                  <div className="bg-gradient-to-br from-blue-800 to-indigo-700 overflow-hidden">
                     {/* bg-gradient-to-br from-blue-800 to-indigo-800  */}
                     {/* dark:bg-gray-800 bg-white relative overflow-hidden h-screen */}
                     <br></br>
                     <link
                        rel="stylesheet"
                        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                        crossOrigin="anonymous"
                     />
                     <div className="">
                        <div className="flex flex-col justify-center items-center">
                           {/* <!-- Information Modal --> */}
                           <div className="md:w-1/2 sm:w-full rounded-lg shadow-lg bg-white my-3">
                              <div className="flex justify-between border-b border-gray-100 px-5 py-4">
                                 <div>
                                    <i
                                       className="fas fa-exclamation-circle text-blue-500"
                                       data-tip={`${job.applications.length} Applied`}
                                       data-event="click"
                                    ></i>
                                    <span className="px-10 text-2xl font-semibold text-gray-700 capitalize">
                                       {" "}
                                       {job.company}
                                    </span>
                                 </div>
                                 <div>
                                    <button className="rounded-lg bg-pink-500 border-2 border-transparent text-sm py-2 px-3 text-white hover:bg-orange-600 transition duration-150">
                                       Recruiter
                                    </button>
                                 </div>
                              </div>
                              {/* px-10 text-2xl font-semibold text-gray-700 capitalize */}

                              <h1 className="px-10 font-bold text-gray-700 text-lg justify-center">
                                 Job Description
                              </h1>
                              <div className="px-10 py-5 text-gray-600">
                                 {job.description}
                              </div>

                              <div className="flex justify-between border-b border-gray-100 px-5 py-4">
                                 <div className="px-5 py-4 flex justify-start">
                                    <a href="#" className="text-gray-600">
                                       {job.location}
                                    </a>
                                    {/* <button className="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150">
                           OK
                        </button> */}
                                 </div>

                                 <div className="px-5 py-4 flex justify-end">
                                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                       Apply
                                    </button>
                                    {/* <button className="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150">
                                       OK
                                    </button> */}
                                 </div>
                              </div>
                              {/* <div className="h-20 flex items-center justify-left px-10">
                           <a href="#" className="text-gray-600">
                              California, Los Angeles
                              </a>
                        </div> */}
                           </div>
                        </div>
                     </div>

                     {/* Other card */}
                     {/* <!-- component --> */}
                     {/* <!-- component --> */}
                     <br></br>
                  </div>
                  <ReactTooltip globalEventOff="click" />
               </>
            );
         })}
      </>
   );
};

export default jobs;
