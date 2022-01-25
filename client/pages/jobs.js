import React, { useState, useEffect } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import JobCard from "../components/RecruiterInfo/JobCard";
import axios from "axios";
import ReactTooltip from "react-tooltip";
import Recruiters_list from "../components/RecruiterInfo/Recruiters_list";
import Categories from "../components/RecruiterInfo/Categories";
import Recent_Job_Post from "../components/RecruiterInfo/Recent_Job_Post";

const jobs = () => {
   const [jobs, setJobs] = useState([]);
   // const [okay, setOkay] = useState(false);

   // useEffect(() => {
   //    async function fetchData() {
   //       const data = await axios
   //          .get("http://localhost:4000/api/jobs/")
   //          .then((res) => {
   //             setJobs(res.data);
   //             // console.log(res.data);
   //          })
   //          .catch((err) => {
   //             console.log(err.message, "Something went wrong while fetching");
   //          });
   //    }
   //    fetchData();
   // }, []);

   const getTotalApplication = (x) => {};

   return (
      //       <>
      //         <!-- tailwind.config.js -->
      // module.exports = {
      //     plugins: [require('@tailwindcss/forms'),]
      // };

      // <!-- component -->
      <div class="overflow-x-hidden bg-gray-100">
         <div class="px-6 py-8">
            <div class="container flex justify-between mx-auto">
               <div class="w-full lg:w-8/12">
                  <div class="flex items-center justify-between">
                     <h1 class="text-xl font-bold text-gray-700 md:text-2xl">
                        Post
                     </h1>
                     <div>
                        <select class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                           <option>Latest</option>
                           <option>Last Week</option>
                        </select>
                     </div>
                  </div>

                  {/* Job Card Component */}
                  <JobCard />
                  
                  <div class="mt-8">
                     <div class="flex">
                        <a
                           href="#"
                           class="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed"
                        >
                           previous
                        </a>

                        <a
                           href="#"
                           class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                        >
                           1
                        </a>

                        <a
                           href="#"
                           class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                        >
                           2
                        </a>

                        <a
                           href="#"
                           class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                        >
                           3
                        </a>

                        <a
                           href="#"
                           class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                        >
                           Next
                        </a>
                     </div>
                  </div>
               </div>

               {/* <aside> */}
               <aside class="hidden w-4/12 -mx-8 lg:block">
                  {/* Recruiter List Component */}
                  <Recruiters_list />

                  {/* Categories component */}
                  <Categories />

                  {/* Recent Job Post Component */}
                  <Recent_Job_Post />
               </aside>
               {/* </aside> */}
            </div>
         </div>
         <footer class="px-6 py-2 text-gray-100 bg-gray-800">
            <div class="container flex flex-col items-center justify-between mx-auto md:flex-row">
               <a href="#" class="text-2xl font-bold">
                  Brand
               </a>
               <p class="mt-2 md:mt-0">All rights reserved 2020.</p>
               <div class="flex mt-4 mb-2 -mx-2 md:mt-0 md:mb-0">
                  <a href="#" class="mx-2 text-gray-100 hover:text-gray-400">
                     <svg viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                        <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path>
                     </svg>
                  </a>
                  <a href="#" class="mx-2 text-gray-100 hover:text-gray-400">
                     <svg viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                        <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                     </svg>
                  </a>
                  <a href="#" class="mx-2 text-gray-100 hover:text-gray-400">
                     <svg viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                        <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                     </svg>
                  </a>
               </div>
            </div>
         </footer>

         <div class="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
            <div class="lg:w-72 px-6 lg:px-0">
               <div class="p-2 bg-blue-600 rounded-lg shadow-lg sm:p-3">
                  <div class="flex flex-wrap items-center justify-between">
                     <a
                        target="_blank"
                        href="#"
                        class="flex items-center flex-1 w-0"
                     >
                        <span class="flex p-2 bg-blue-800 rounded-lg">
                           <svg
                              class="h-6 w-6 text-white"
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

                        <p class="ml-3 font-medium tracking-wide text-white truncate">
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
