import React, { useState, useEffect, useContext } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import JobCard from "../components/JobPage/JobCard";
import axios from "axios";
import ReactTooltip from "react-tooltip";
import RecruiterList from "../components/JobPage/RecruiterList";
import Categories from "../components/JobPage/Categories";
import RecentJobPost from "../components/JobPage/RecentJobPost";
import { UserContext } from "../context/AuthProvider";
import Navbar from "../components/JobPage/Navbar";

const jobs = () => {
   const [jobs, setJobs] = useState([]);
   const [state] = useContext(UserContext);
   const [current, setCurrent] = useState(false);

   useEffect(() => {
      let isMounted = true;
      // It is used to cancel req if component unmounts
      const controller = new AbortController();
      const getJobs = async () => {
         try {
            const response = await axios.get(
               "http://localhost:5000/api/job/all",
               {
                  signal: controller.signal,
                  headers: {
                     x_auth_token: `${state.token}`,
                  },
               }
            );
            console.log(state.token);
            console.log(response.data);
            setJobs(response.data);
            setCurrent(true);
         } catch (err) {}
      };
      getJobs();
      return () => {
         isMounted = false;
         controller.abort();
      };
   }, []);
   // const getTotalApplication = (x) => {};

   return (
      // <!-- component -->
      <div className="overflow-x-hidden bg-gray-100">
         <Navbar />
         <div className="px-6 py-8">
            <div className="container flex justify-between mx-auto">
               <div className="w-full lg:w-8/12">
                  <br />{" "}
                  <div className="flex items-center justify-between">
                     <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                        Post
                     </h1>
                     <div>
                        <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                           <option>Latest</option>
                           <option>Last Week</option>
                        </select>
                     </div>
                  </div>
                  {/* Job Card Component */}
                  {current !== false ? (
                     <JobCard jobs={jobs} />
                  ) : (
                     "No jobs available at the moment, please try again later"
                  )}
                  <div className="mt-8">
                     <div className="flex">
                        <a
                           href="#"
                           className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed"
                        >
                           previous
                        </a>

                        <a
                           href="#"
                           className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                        >
                           1
                        </a>

                        <a
                           href="#"
                           className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                        >
                           2
                        </a>

                        <a
                           href="#"
                           className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                        >
                           3
                        </a>

                        <a
                           href="#"
                           className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                        >
                           Next
                        </a>
                     </div>
                  </div>
               </div>

               {/* <aside> */}
               <aside className="hidden w-4/12 -mx-8 lg:block">
                  {/* Recruiter List Component */}
                  <RecruiterList />

                  {/* Categories component */}
                  <Categories />

                  {/* Recent Job Post Component */}
                  <RecentJobPost />
               </aside>
               {/* </aside> */}
            </div>
         </div>

         <div className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
            <div className="lg:w-72 px-6 lg:px-0">
               <div className="p-2 bg-blue-600 rounded-lg shadow-lg sm:p-3">
                  <div className="flex flex-wrap items-center justify-between">
                     <a
                        target="_blank"
                        href="#"
                        className="flex items-center flex-1 w-0"
                     >
                        <span className="flex p-2 bg-blue-800 rounded-lg">
                           <svg
                              className="h-6 w-6 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M5.12954 3.00772C5.48563 2.38457 6.14831 2 6.86603 2H17.134C17.8517 2 18.5144 2.38457 18.8704 3.00772L20.0133 5.00772C20.6612 6.14163 20.0618 7.51107 18.9235 7.89532C18.9276 7.97661 18.9269 8.0591 18.9209 8.14249L18.0638 20.1425C17.989 21.1891 17.1181 22 16.0689 22H7.9311C6.88182 22 6.01094 21.1891 5.93618 20.1425L5.07904 8.14249C5.07308 8.0591 5.07231 7.97661 5.07645 7.89531C3.93813 7.51105 3.33874 6.14162 3.98668 5.00772L5.12954 3.00772ZM7.07396 8L7.28824 11H16.7117L16.926 8H7.07396ZM7.71681 17L7.9311 20H16.0689L16.2831 17H7.71681ZM18.2768 6L17.134 4L6.86603 4L5.72317 6H18.2768Z"
                                 fill="currentColor"
                              ></path>
                           </svg>
                        </span>

                        <p className="ml-3 font-medium tracking-wide text-white truncate">
                           Live Chat
                        </p>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default jobs;
