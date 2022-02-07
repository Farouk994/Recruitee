import React, { useContext } from "react";
import moment from "moment";
import { UserContext } from "../../context/AuthProvider";

const JobCard = ({ jobs }) => {
   const [state] = useContext(UserContext);
   return (
      <div>
         {jobs.map((job, index) => (
            <div className="mt-6" key={index}>
               <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between">
                     <span className="font-light text-gray-600">
                        {moment(job.date).fromNow()}
                     </span>
                     <a
                        href="#"
                        className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                     >
                        APPLY
                     </a>
                  </div>
                  <div className="mt-2">
                     <a
                        href="#"
                        className="text-2xl font-bold text-gray-700 hover:underline"
                     >
                        {job.company}
                     </a>
                     <p className="mt-2 text-gray-600">{job.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                     <a href="#" className="text-blue-500 hover:underline">
                        Read more
                     </a>
                     <div>
                        <a href="#" className="flex items-center">
                           <img
                              // src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                              src={state.user.image && state.user.image.url}
                              alt="avatar"
                              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                           />
                           <h1 className="font-bold text-gray-700 hover:underline">
                              {job.name}
                           </h1>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default JobCard;
