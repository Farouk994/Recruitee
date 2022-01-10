import React from "react";


const JobCard = () => {
    return (
      <div>
         <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600">
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
                           <i className="fas fa-exclamation-circle text-blue-500"></i>
                           <span className="px-10 text-2xl font-semibold text-gray-700 capitalize">
                              {" "}
                              Hub California Company
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
                        Lorem ipsum dolor sit amet, consectetur adipi scing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Lorem ipsum dolor sit amet,
                        consectetur adipi scing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum
                        dolor sit amet, consectetur adipi scing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Lorem ipsum dolor sit amet, consectetur adipi
                        scing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Lorem ipsum dolor sit amet,
                        consectetur adipi scing elit,
                     </div>

                     <div className="flex justify-between border-b border-gray-100 px-5 py-4">
                        <div className="px-5 py-4 flex justify-start">
                           <a href="#" className="text-gray-600">
                              California, Los Angeles
                           </a>
                           {/* <button className="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150">
                           OK
                        </button> */}
                        </div>

                        <div className="px-5 py-4 flex justify-end">
                           <button className="bg-orange-500 mr-1 rounded-full text-sm py-2 px-3 text-white hover:bg-orange-600 transition duration-150">
                              Cancel
                           </button>
                           <button className="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150">
                              OK
                           </button>
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
         </div>
      </div>
   );
};

export default JobCard;
