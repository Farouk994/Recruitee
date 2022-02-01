import React, { useContext, useEffect, useState, createContext } from "react";
import UserRoute from "../../components/routes/UserRoute";
import { UserContext } from "../../context/index";
import { useRouter, userRouter } from "next/router";
import moment from "moment";
import Table from "../../components/Table";
import { Modal } from "antd";
import About from "../../components/RecruiterInfo/About_dashboard";
import PostJob from "../../components/RecruiterInfo/PostJob_dashboard";
import Other_profiles_dashboard from "../../components/RecruiterInfo/Other_profiles_dashboard";
import axios from "axios";

export default function dashboard() {
   const [state] = useContext(UserContext);
   const [profiles, setProfiles] = useState([]);
   const [current, setCurrent] = useState("");
   const [okay, setOkay] = useState(false);
   const [isModalVisible, setIsModalVisible] = useState(false);
   // const getData = () => {
   //    window.localStorage.removeItem("auth");
   //    setState(null);
   // };

   useEffect(() => {
      state && state.token;
   }, [state && state.token]);

   // console.log(state.recruiter.firstName);

   const showModal = () => {
      setIsModalVisible(true);
   };

   const handleOk = () => {
      setIsModalVisible(false);
   };

   const handleCancel = () => {
      setIsModalVisible(false);
   };

   // Display Other Recruiter Profiles
   useEffect(() => {
      if (state && state.token) {
         async function getProfiles() {
            const { data } = await axios.get(
               "http://localhost:4000/api/recruiter/profiles/all",
               {
                  headers: {
                     x_auth_token: `${state.token}`,
                  },
               }
            );
            setProfiles(data.slice(0, 6));
         }
         getProfiles();
      }
   }, [state && state.token]);

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
                  <div className="w-full md:w-2/12 md:mx-2">
                     {/* <!-- Profile Card --> */}
                     <div className="bg-white p-3 border-t-4 rounded-lg border-green-400">
                        <div className="image overflow-hidden rounded-lg">
                           <img
                              className="h-auto w-full mx-auto"
                              src={
                                 state.recruiter.image &&
                                 state.recruiter.image.url
                              }
                              alt=""
                           />
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                           {state.recruiter.firstName}{" "}
                           {state.recruiter.lastName}
                           {/* {profiles.firstName} */}
                        </h1>
                        <h3 className="text-blue-600 font-lg text-semibold leading-6">
                           {state.recruiter.company}
                        </h3>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                           {state.recruiter.bio}
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
                                 {moment(state.recruiter.date).fromNow()}
                              </span>
                           </li>
                        </ul>
                     </div>
                     {/* <!-- End of profile card --> */}
                     <div className="my-4"></div>

                     {/* <!-- Friends card --> */}
                     {/* <Other_profiles_dashboard profiles={profiles} /> */}
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
   );
}

// {
//    headers: {
//       Authorization: `Bearer ${state.token}`,
//    },
// }
