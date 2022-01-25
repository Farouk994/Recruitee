import React from "react";

const Update = () => {
   return (
      <div>
         <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
            <div className="container px-4 mx-auto">
               <div className="mb-14 text-center">
                  <span className="text-lg text-blue-400 font-bold">
                     What&apos;s new at Shuffle
                  </span>
                  <h2 className="mt-8 text-5xl font-bold font-heading text-white">
                     Latest blog
                  </h2>
               </div>
               <div className="flex flex-wrap -m-6">
                  <div className="relative w-full lg:w-1/3 p-6">
                     <img
                        className="hidden lg:block absolute top-0 left-0 -ml-40 mt-24"
                        src="zospace-assets/lines/left-line.svg"
                        alt=""
                     />
                     <div className="relative z-10 bg-gray-700 rounded-lg">
                        <div className="relative mb-8 h-52">
                           <img
                              className="w-full h-full rounded-lg object-cover object-top"
                              src="https://images.pexels.com/photos/6822288/pexels-photo-6822288.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450&amp;w=940"
                              alt=""
                           />
                           <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
                              <p className="text-xl font-bold">30</p>
                              <p className="text-xs uppercase text-gray-300">Feb</p>
                           </div>
                        </div>
                        <div className="px-14 pb-10">
                           <a
                              className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400"
                              href="#"
                           >
                              Is remote work working? A one year check-in
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="relative w-full lg:w-1/3 p-6">
                     <img
                        className="hidden lg:block absolute top-0 left-0 -ml-14 mt-24"
                        src="zospace-assets/lines/right-line.svg"
                        alt=""
                     />
                     <div className="relative z-10 lg:mt-24 bg-gray-700 rounded-lg">
                        <div className="relative mb-8 h-52">
                           <img
                              className="w-full h-full rounded-lg object-cover"
                              src="https://images.pexels.com/photos/5325768/pexels-photo-5325768.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450&amp;w=940"
                              alt=""
                           />
                           <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
                              <p className="text-xl font-bold">29</p>
                              <p className="text-xs uppercase text-gray-300">Feb</p>
                           </div>
                        </div>
                        <div className="px-14 pb-10">
                           <a
                              className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400"
                              href="#"
                           >
                              10 ways to keep your remote teams engaged
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="relative w-full lg:w-1/3 p-6">
                     <img
                        className="hidden lg:block absolute top-0 right-0 mr-64 mt-24"
                        src="zospace-assets/lines/left-line.svg"
                        alt=""
                     />
                     <div className="relative z-10 bg-gray-700 rounded-lg">
                        <div className="relative mb-8 h-52">
                           <img
                              className="mb-8 w-full h-52 rounded-lg object-cover"
                              src="https://images.pexels.com/photos/5325708/pexels-photo-5325708.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450&amp;w=940"
                              alt=""
                           />
                           <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
                              <p className="text-xl font-bold">25</p>
                              <p className="text-xs uppercase text-gray-300">Feb</p>
                           </div>
                        </div>
                        <div className="px-14 pb-10">
                           <a
                              className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400"
                              href="#"
                           >
                              How to make a concept map (+Examples)
                           </a>
                        </div>
                     </div>
                     <img
                        className="hidden lg:block absolute top-0 right-0 -mr-32 mt-24"
                        src="zospace-assets/lines/right-line.svg"
                        alt=""
                     />
                  </div>
               </div>
               <div className="mt-14 lg:mt-24 text-center">
                  <a
                     className="inline-block py-5 px-12 mr-4 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-bold transition duration-200"
                     href="#"
                  >
                     See all
                  </a>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Update;
