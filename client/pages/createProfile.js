import React from "react";

export default function createProfile() {
   return (
      // <!-- component -->
      <div class="w-full bg-gray-800 overflow-hidden">
         <div class="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
         <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div class="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
               <p class="text-3xl font-bold leading-7 text-center text-white">
                  Create User Profile
               </p>
               <form action="" method="post">
                  <div class="md:flex items-center mt-12">
                        {/* <i
                           className="fas fa-exclamation-circle text-blue-500"
                           data-tip="If you have prior experience"
                           data-event="click"
                        ></i> */}
                     <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">
                           Company
                        </label>
                        <input
                           type="text"
                           class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                        />
                     </div>
                     <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none text-gray-300">
                           Phone Number
                        </label>
                        <input
                           type="email"
                           class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                        />
                     </div>
                  </div>
                  <div class="md:flex items-center mt-8">
                     <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">
                           Status
                        </label>
                        <select class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded">
                           <option></option>
                           <option>Looking for Work</option>
                           <option>Freelancing Work</option>
                           <option>Contract</option>
                        </select>
                     </div>
                  </div>
                  <div class="md:flex items-center mt-8">
                     <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">
                           Location
                        </label>
                        <input
                           type="text"
                           class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                        />
                     </div>
                  </div>
                  <div class="md:flex items-center mt-8">
                     <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">
                           GitHub Profile
                        </label>
                        <input
                           type="text"
                           class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                        />
                     </div>
                  </div>
                  <div class="md:flex items-center mt-8">
                     <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">
                           Website
                        </label>
                        <input
                           type="text"
                           class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                        />
                     </div>
                  </div>
                  <div class="md:flex items-center mt-8">
                     <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">
                           Experience
                        </label>
                        <select class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded">
                           <option></option>
                           <option>1 - 3 years</option>
                           <option>4 - 5 years</option>
                           <option>5 and Above</option>
                        </select>
                     </div>
                  </div>
                  <div>
                     <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none text-gray-300">
                           Bio
                        </label>
                        <textarea
                           type="text"
                           class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"
                        ></textarea>
                     </div>
                  </div>
                  <div class="grid grid-cols-1 mt-5 mx-7">
                     <label class="uppercase md:text-sm text-xs text-gray-300 text-light font-semibold mb-1">
                        Upload Photo
                     </label>
                     <div class="flex items-center justify-center w-full">
                        <label class="flex flex-col border-4 border-dashed w-full h-32 hover:bg-blue-500 hover:border-purple-100 group">
                           <div class="flex flex-col items-center justify-center pt-7">
                              <svg
                                 class="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                 ></path>
                              </svg>
                              <p class="lowercase text-sm text-gray-300 group-hover:text-white-900 pt-1 tracking-wider">
                                 Select a photo
                              </p>
                           </div>
                           <input type="file" class="hidden" />
                        </label>
                     </div>
                  </div>
                  <div class="flex items-center justify-center w-full">
                     <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Create Profile
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
