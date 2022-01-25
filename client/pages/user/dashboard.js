import React, { useContext, useEffect, useState } from "react";
import UserRoute from "../../components/routes/UserRoute";
import { UserContext } from "../../context/index";
import { useRouter, userRouter } from "next/router";
import moment from "moment";
import Table from "../../components/Table";
import { Modal } from "antd";
import About from "../../components/RecruiterInfo/About_dashboard";
import PostJob from "../../components/RecruiterInfo/PostJob_dashboard";

export default function dashboard() {
   const [state, setState] = useContext(UserContext);
   const [current, setCurrent] = useState("");
   const [okay, setOkay] = useState(false);
   const [isModalVisible, setIsModalVisible] = useState(false);
   const getData = () => {
      window.localStorage.removeItem("auth");
      setState(null);
   };

   const showModal = () => {
      setIsModalVisible(true);
   };

   const handleOk = () => {
      setIsModalVisible(false);
   };

   const handleCancel = () => {
      setIsModalVisible(false);
   };

   // Handle Post Job Submission

   const [content, setContent] = useState("");

   const router = useRouter();

   return (
      // <UserRoute>
      <div>
         {/* <h1>Welcome {state && state.user && state.user.lastName}</h1> */}
         <div className="w-full h-screen bg-gradient-to-br from-blue-600 to-indigo-600 ">
            <div className="w-full text-white bg-main-color">
               <div
                  x-data="{ open: false }"
                  className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
               >
                  {/* <nav :className="{'flex': open, 'hidden': !open}" */}
               </div>
            </div>
            {/* <!-- End of Navbar --> */}

            <div className="container mx-auto my-5 p-5 rounded-lg">
               <div className="md:flex no-wrap md:-mx-2 ">
                  {/* <!-- Left Side --> */}
                  <div className="w-full md:w-3/12 md:mx-2">
                     {/* <!-- Profile Card --> */}
                     <div className="bg-white p-3 border-t-4 rounded-lg border-green-400">
                        <div className="image overflow-hidden rounded-lg">
                           <img
                              className="h-auto w-full mx-auto"
                              src={state.user.image && state.user.image.url}
                              alt=""
                           />
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                           {state.user.firstName} {state.user.lastName}
                        </h1>
                        <h3 className="text-blue-600 font-lg text-semibold leading-6">
                           {state.user.company}
                        </h3>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                           {state.user.bio}
                        </p>
                        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                           <li className="flex items-center py-3">
                              <p>
                                 <span className="text-blue-600 font-lg text-semibold leading-8">
                                    {}
                                 </span>{" "}
                                 Jobs Posted
                              </p>
                              <span className="ml-auto">
                                 <button
                                    onClick={showModal}
                                    className="bg-indigo-600
                                     py-1 px-2 rounded text-white text-sm"
                                 >
                                    Post Job
                                 </button>
                              </span>
                           </li>
                           <li className="flex items-center py-3">
                              <span>Member since</span>
                              <span className="ml-auto">
                                 {moment(state.user.date).fromNow()}
                              </span>
                           </li>
                        </ul>
                     </div>
                     {/* <!-- End of profile card --> */}
                     <div className="my-4"></div>
                     {/* <!-- Friends card --> */}
                     <div className="bg-white p-3 hover:shadow">
                        <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                           <span className="text-green-500">
                              <svg
                                 className="h-5 fill-current"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinejoin="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                 />
                              </svg>
                           </span>
                           <span>Similar Profiles</span>
                        </div>
                        <div className="grid grid-cols-3">
                           <div className="text-center my-2">
                              <img
                                 className="h-16 w-16 rounded-full mx-auto"
                                 src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                 alt=""
                              />
                              <a href="#" className="text-main-color">
                                 Jim
                              </a>
                           </div>
                           <div className="text-center my-2">
                              <img
                                 className="h-16 w-16 rounded-full mx-auto"
                                 src="https://thispersondoesnotexist.com/image"
                                 alt=""
                              />
                              <a href="#" className="text-main-color">
                                 Jaime
                              </a>
                           </div>
                           <div className="text-center my-2">
                              <img
                                 className="h-16 w-16 rounded-full mx-auto"
                                 src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                 alt=""
                              />
                              <a href="#" className="text-main-color">
                                 Natie
                              </a>
                           </div>
                           <div className="text-center my-2">
                              <img
                                 className="h-16 w-16 rounded-full mx-auto"
                                 src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                                 alt=""
                              />
                              <a href="#" className="text-main-color">
                                 Casey
                              </a>
                           </div>
                        </div>
                     </div>
                     {/* <!-- End of friends card --> */}
                  </div>
                  {/* <!-- Right Side --> */}
                  <div className="w-full md:w-9/12 mx-2 h-64 ">
                     {/* <!-- Profile tab -->
                     <!-- About Section --> */}
                     <About state={state} />
                     {/* <!-- End of about section --> */}

                     <div className="my-4"></div>

                     {/* <!-- Experience and education --> */}

                     <div className="my-4"></div>
                     {/* <div className="bg-white p-3 shadow-sm rounded-lg"> */}
                     <Table />
                     {/* </div> */}
                     {/* <!-- End of profile tab --> */}
                  </div>
               </div>
            </div>
         </div>
         <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
         >
            {/* <!-- component --> */}
            <PostJob />
         </Modal>
      </div>
      // {/* </UserRoute> */}
   );
}

// {
//    headers: {
//       Authorization: `Bearer ${state.token}`,
//    },
// }
