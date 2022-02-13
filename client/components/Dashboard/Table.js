import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../context/AuthProvider";
import moment from "moment";

const Table = ({ page }) => {
   const [state] = useContext(UserContext);

   const [jobs, setJobs] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const data = axios
            .get("http://localhost:5000/api/jobs/job-posts", {
               headers: {
                  x_auth_token: `${state?.token}`,
               },
            })
            .then((res) => {
               setJobs(res.data);
               console.log(res.data);
            })
            .catch((err) => {
               toast.error(err.response.message);
            });
      }
      fetchData();
   }, [state]);

   return (
      <div className="bg-white p-3 shadow-sm rounded-lg">
         {/* <!-- component --> */}
         <div>
            <table className="min-w-full leading-normal">
               <thead>
                  <tr>
                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Company
                     </th>
                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Title
                     </th>
                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Created at
                     </th>
                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Applications
                     </th>
                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                     </th>
                     {page === "userProfile" && (
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                           Action
                        </th>
                     )}
                  </tr>
               </thead>
               <tbody>
                  {jobs.map((job, index) => (
                     <tr id={index}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                           <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                 <img
                                    className="w-full h-full rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                    alt=""
                                 />
                              </div>
                              <div className="ml-3">
                                 <p className="text-gray-900 whitespace-no-wrap">
                                    {job.company}
                                 </p>
                              </div>
                           </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                           <p className="text-gray-900 whitespace-no-wrap">
                              {job.title}
                           </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                           <p className="text-gray-900 whitespace-no-wrap">
                              {moment(job.date).fromNow()}
                           </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                           <p className="text-gray-900 whitespace-no-wrap">
                              {job.applications.length === 0
                                 ? "---"
                                 : job.applications.length}
                           </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                           <span
                              className="relative inline-block px-3 py-1 font-semibold opacity-70 text-green-900 leading-tight "
                              // disabled={true}
                           >
                              <span
                                 aria-hidden
                                 className="absolute inset-0 bg-green-200 rounded-full"
                              ></span>
                              <span
                                 className="relative"
                                 // style={{ color: "black" }}
                              >
                                 Active
                              </span>
                           </span>
                        </td>
                        {page === "userProfile" && (
                           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <button className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                 <span
                                    aria-hidden
                                    className="absolute inset-0 bg-green-600 rounded-full"
                                 ></span>
                                 <span
                                    className="relative"
                                    style={{ color: "white" }}
                                 >
                                    Edit
                                 </span>
                              </button>{" "}
                              <button className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                 <span
                                    aria-hidden
                                    className="absolute inset-0 bg-red-600 rounded-full"
                                 ></span>
                                 <span
                                    className="relative"
                                    style={{ color: "white" }}
                                 >
                                    Delete
                                 </span>
                              </button>
                           </td>
                        )}
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Table;

{
   /* <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
               <span className="text-xs xs:text-sm text-gray-900">
                  Showing 1 to 4 of 50 Entries
               </span>
               <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                     Prev
                  </button>
                  &nbsp; &nbsp;
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                     Next
                  </button>
               </div>
            </div> */
}
