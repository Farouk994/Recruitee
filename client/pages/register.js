import React, { useState, useContext } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import { UserContext } from "../context/AuthProvider";
import { useRouter } from "next/router";

const register = () => {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [status, setStatus] = useState("");
   const [company, setCompany] = useState("");
   const [location, setLocation] = useState("");
   const [website, setWebsite] = useState("");
   const [experience, setExperience] = useState("");
   const [bio, setBio] = useState("");
   //    const [secret, setSecret] = useState("");
   const [ok, setOkay] = useState(false);
   const [loading, setLoading] = useState(false);
   const [image, setImage] = useState({});
   const [uploading, setUploading] = useState(false);
   const [state] = useContext(UserContext);
   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(
         firstName,
         lastName,
         email,
         password,
         bio,
         location,
         status,
         experience,
         company,
         website,
         //  secret,
         image
      );
      try {
         setLoading(true);
         const { data } = await axios.post(
            "http://localhost:5000/api/register/account",
            {
               firstName,
               lastName,
               email,
               password,
               bio,
               location,
               experience,
               company,
               website,
               //    secret,
               image,
            }
         );
         console.log("User Registered ==>", data);
         if (data.error) {
            toast.error(data.error);
            setLoading(false);
         } else {
            setLastName("");
            setFirstName("");
            setEmail("");
            setPassword("");
            // setSecret("");
            setBio("");
            setStatus("");
            setExperience("");
            setCompany("");
            setWebsite("");
            setOkay(data.ok);
            setLoading(false);
            console.log(data);
         }
      } catch (err) {
         toast.error(err.response.data);
         setLoading(false);
      }
   };

   if (state && state.token) router.push("/");

   const handleImage = async (e) => {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("image", file);
      // formData.append("content", content);
      console.log([...formData]);
      setUploading(true);
      try {
         const { data } = await axios.post(
            "http://localhost:5000/api/upload-image",
            formData
         );
         // console.log(data);
         setImage({
            url: data.url,
            public_id: data.public_id,
         });
         setUploading(false);
      } catch (err) {
         console.log(err.message);
         setUploading(false);
      }
   };
   return (
      <div>
         {/* <!-- component --> */}
         <div className="w-full bg-gray-800 overflow-hidden">
            <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
               <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
                  <p className="text-3xl font-bold leading-7 text-center text-white">
                     Create User Profile
                  </p>
                  <form onSubmit={handleSubmit}>
                     <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-300 text-light font-semibold mb-1">
                           Upload Photo
                        </label>
                        <div className="flex items-center justify-center w-full">
                           <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-blue-500 hover:border-purple-100 group">
                              <div className="flex flex-col items-center justify-center pt-7">
                                 <svg
                                    className="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth="2"
                                       d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    ></path>
                                 </svg>
                                 <p className="lowercase text-sm text-gray-300 group-hover:text-white-900 pt-1 tracking-wider">
                                    {image && image.url ? (
                                       <Avatar
                                          size={40}
                                          src={image.url}
                                          className="mt-1"
                                       />
                                    ) : uploading ? (
                                       <LoadingOutlined className="mt-2" />
                                    ) : (
                                       <CameraOutlined className="mt-2" />
                                    )}
                                 </p>
                              </div>
                              <input
                                 type="file"
                                 className="hidden"
                                 onChange={handleImage}
                              />
                           </label>
                        </div>
                     </div>
                     <div className="md:flex items-center mt-12">
                        <div className="w-full md:w-1/2 flex flex-col">
                           <label
                              htmlFor="name"
                              className="font-semibold leading-none text-gray-300"
                           >
                              First Name
                           </label>
                           <input
                              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                              onChange={(e) => {
                                 setFirstName(e.target.value);
                              }}
                              type="text"
                              id="name"
                              name="name"
                              placeholder=""
                              // className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                           />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                           <label
                              htmlFor="name"
                              className="font-semibold leading-none text-gray-300"
                           >
                              Last Name
                           </label>
                           <input
                              onChange={(e) => {
                                 setLastName(e.target.value);
                              }}
                              type="text"
                              id="lastName"
                              name="lastName"
                              placeholder=""
                              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                           />
                        </div>
                     </div>
                     <div className="md:flex items-center mt-8">
                        <div className="w-full flex flex-col">
                           <label
                              htmlFor="name"
                              className="font-semibold leading-none text-gray-300"
                           >
                              Email
                           </label>
                           <input
                              onChange={(e) => {
                                 setEmail(e.target.value);
                              }}
                              type="email"
                              id="email"
                              name="email"
                              placeholder=""
                              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                           />
                        </div>
                     </div>
                     <div className="md:flex items-center mt-8">
                        <div className="w-full flex flex-col">
                           <label
                              htmlFor="name"
                              className="font-semibold leading-none text-gray-300"
                           >
                              Password
                           </label>
                           <input
                              onChange={(e) => {
                                 setPassword(e.target.value);
                              }}
                              type="password"
                              id="password"
                              name="password"
                              placeholder=""
                              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                           />
                        </div>
                     </div>
                     {/* <div className="relative pt-4">
                <label
                   htmlFor="name"
                   className="text-base leading-7 text-blueGray-500"
                >
                   Input Date
                </label>
                <input
                   type="date"
                   id="date"
                   name="date"
                   placeholder="name"
                   className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                />
             </div> */}
                     {/* <div className="relative pt-4">
                <label
                   htmlFor="name"
                   className="text-base leading-7 text-blueGray-500"
                >
                   Input Color
                </label>
                <input
                   type="color"
                   id="color"
                   name="color"
                   placeholder="name"
                   className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                />
             </div> */}

                     {/* <div className="relative pt-4">
                <label
                   htmlFor="name"
                   className="text-base leading-7 text-blueGray-500"
                >
                   Input Range
                </label>
                <input
                   type="range"
                   id="range"
                   name="range"
                   placeholder="name"
                   className="w-full px-0 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                />
             </div> */}
                     {/* <div className="md:flex items-center mt-8">
                        <div className="w-full flex flex-col">
                           <label
                              htmlFor="name"
                              className="font-semibold leading-none text-gray-300"
                           >
                              Select Security Question
                           </label>
                           <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded">
                              <option></option>
                              <option>What is your dog name?</option>
                              <option>Which city where you born?</option>
                              <option>Where are you located</option>
                           </select>
                        </div>
                     </div> */}
                     {/* TODO: SECRET */}
                     {/* <div className="md:flex items-center mt-8">
                        <div className="w-full flex flex-col">
                           <label
                              htmlFor="name"
                              className="font-semibold leading-none text-gray-300"
                           > */}
                     {/* Secret{""}{" "} */}
                     {/* <small>
                            <em>"Incase you have forgotten your password"</em>
                         </small> */}
                     {/* </label>
                           <input
                              onChange={(e) => {
                                 setSecret(e.target.value);
                              }}
                              type="text"
                              id="secret"
                              name="secret"
                              placeholder=""
                              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                           />
                        </div>
                     </div> */}
                     {/* <div className="md:flex items-center mt-8">
                        <div className="w-full flex flex-col">
                           <label
                              htmlFor="name"
                              className="font-semibold leading-none text-gray-300"
                           >
                              Select Status
                           </label>
                           <select
                              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                              onChange={(e) => {
                                 setStatus(e.target.value);
                              }}
                           >
                              <option></option>
                              <option>Active</option>
                              <option>Unavailable</option>
                              <option>N/A</option>
                           </select>
                        </div>
                     </div> */}
                     <div className="md:flex items-center mt-12">
                        <div className="w-full md:w-1/2 flex flex-col">
                           <label
                              htmlFor="name"
                              className="font-semibold leading-none text-gray-300"
                           >
                              Company
                           </label>
                           <input
                              onChange={(e) => {
                                 setCompany(e.target.value);
                              }}
                              type="text"
                              id="company"
                              name="company"
                              placeholder=""
                              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                           />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                           <label
                              htmlFor="name"
                              className="font-semibold leading-none text-gray-300"
                           >
                              Website
                           </label>
                           <input
                              onChange={(e) => {
                                 setWebsite(e.target.value);
                              }}
                              type="text"
                              id="website"
                              name="website"
                              placeholder=""
                              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                           />
                        </div>
                     </div>
                     {/* <div className="md:flex items-center mt-8">
                        <div className="w-full flex flex-col">
                           <label
                              htmlFor="name"
                              className="font-semibold leading-none text-gray-300"
                           >
                              Experience
                           </label>
                           <select
                              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                              onChange={(e) => {
                                 setExperience(e.target.value);
                              }}
                           >
                              <option></option>
                              <option>1 - 3 Years</option>
                              <option>4 - 6 Years</option>
                              <option>7 and Above</option>
                           </select>
                        </div>
                     </div> */}
                     <div className="md:flex items-center mt-8">
                        <div className="w-full flex flex-col">
                           <label
                              htmlFor="location"
                              className="font-semibold leading-none text-gray-300"
                           >
                              Location
                           </label>
                           <input
                              onChange={(e) => {
                                 setLocation(e.target.value);
                              }}
                              type="text"
                              id="location"
                              name="location"
                              placeholder="location"
                              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                           />
                        </div>
                     </div>
                     {/* <div className="flex flex-wrap mt-4 mb-6 -mx-3"> */}
                     <div className="w-full flex flex-col mt-8">
                        <label
                           className="font-semibold leading-none text-gray-300"
                           htmlFor="description"
                        >
                           Bio{" "}
                        </label>
                        <textarea
                           onChange={(e) => {
                              setBio(e.target.value);
                           }}
                           className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"
                           id="description"
                           type="text"
                           name="bio"
                           placeholder="Bio..."
                        ></textarea>
                     </div>
                     {/* </div> */}
                     <div className="flex">
                        <label className="flex items-center">
                           <input type="checkbox" className="form-checkbox " />
                           <span className="ml-2 text-gray-300">
                              Agree to Terms and Conditions{" "}
                           </span>
                        </label>
                     </div>
                     <div className="flex items-center w-full pt-4 mb-4">
                        <button className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 ">
                           {" "}
                           {loading ? (
                              <SyncOutlined spin className="py-1" />
                           ) : (
                              "Create Profile"
                           )}{" "}
                        </button>
                     </div>
                     <hr className="my-4 border-gray-200" />
                     <span className="px-4 py-1 mx-auto -mt-8 text-xs text-black transition duration-500 ease-in-out transform bg-gray-200 rounded-lg">
                        Or continue with{" "}
                     </span>
                     <div className="inline-flex items-center justify-between w-full pt-8 ">
                        <button className="w-auto px-8 py-2 mr-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 hover:bg-blueGray-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 focus:border-blueGray-700 focus:bg-blueGray-800 ">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-brand-github"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <path
                                 stroke="none"
                                 d="M0 0h24v24H0z"
                                 fill="none"
                              ></path>
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                           </svg>
                        </button>
                        <button className="w-auto px-8 py-2 mr-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 hover:bg-blueGray-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 focus:border-blueGray-700 focus:bg-blueGray-800 ">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-brand-gitlab"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <path
                                 stroke="none"
                                 d="M0 0h24v24H0z"
                                 fill="none"
                              ></path>
                              <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z"></path>
                           </svg>
                        </button>
                        <button className="w-auto px-8 py-2 mr-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 hover:bg-blueGray-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 focus:border-blueGray-700 focus:bg-blueGray-800 ">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-brand-twitter"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <path
                                 stroke="none"
                                 d="M0 0h24v24H0z"
                                 fill="none"
                              ></path>
                              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                           </svg>
                        </button>
                     </div>
                  </form>
               </div>
               <Modal
                  title="Congratulations"
                  visible={ok}
                  onCancel={() => {
                     setOkay(false);
                  }}
                  footer={null}
               >
                  <p>You have Created your Profile</p>
                  <Link href="/">
                     <button className="py-4 w-full bg-pink-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">
                        {loading ? (
                           <SyncOutlined spin className="py-1" />
                        ) : (
                           "Login Here"
                        )}
                     </button>
                  </Link>
               </Modal>
            </div>
         </div>
      </div>
   );
};

export default register;
