import React, { useState, useContext } from "react";
import moment from "moment";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../../context/AuthProvider";
import { Avatar } from "antd";
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";
import UserRoute from "../../routes/UserRoute";

const PostJob = ({ state }) => {
   //    const [state] = useContext(UserContext);
   console.log(state.token);

   let user = JSON.parse(window.localStorage.getItem("auth"));
   //    let token = s;
   // console.log(token)

   const [company, setCompany] = useState("");
   const [description, setDescription] = useState("");
   const [title, setTitle] = useState("");
   const [salary, setSalary] = useState("");
   const [location, setLocation] = useState("");
   const [urgency, setUrgency] = useState("");
   const [logo, setLogo] = useState({});
   const [loading, setLoading] = useState(false);
   const [uploading, setUploading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         setLoading(true);
         const { data } = await axios.post(
            "http://localhost:5000/api/job/new",
            {
               headers: {
                  x_auth_token: `${state.token}`,
               },
            },
            {
               company,
               description,
               title,
               salary,
               location,
               logo,
            }
         );
         console.log("Token ==>", state.token);
         console.log("Job has been posted ==>", data);
         if (data.error) {
            toast.error(data.error);
            setLoading(false);
         } else {
            setCompany("");
            setDescription("");
            setTitle("");
            setSalary("");
            setLocation("");
            // setUrgency("");
            // setLogo()
            setLoading(false);
         }
      } catch (err) {
         toast.error(err.response.data);
         setLoading(false);
      }
   };

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
         setLogo({
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
      <UserRoute>
         <div>
            <form onSubmit={handleSubmit}>
               <div className="">
                  <div className="">
                     <div className="flex flex-col px-6 py-5 bg-gray-50">
                        <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                           <div className="w-full sm:w-1/2">
                              <p className="mb-2 font-semibold text-gray-700">
                                 Company Name
                              </p>
                              <input
                                 type="text"
                                 name=""
                                 className="w-full p-2 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                 id=""
                                 onChange={(e) => {
                                    setCompany(e.target.value);
                                 }}
                              >
                                 {/* <option value="0">Add service</option> */}
                              </input>
                           </div>
                           <div className="w-full sm:w-1/2">
                              <p className="mb-2 font-semibold text-gray-700">
                                 Job Title
                              </p>
                              <input
                                 type="text"
                                 name=""
                                 className="w-full p-2 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                 id=""
                                 onChange={(e) => {
                                    setTitle(e.target.value);
                                 }}
                                 value={title}
                              >
                                 {/* <option value="0">Add service</option> */}
                              </input>
                           </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                           <div className="w-full sm:w-1/2">
                              <p className="mb-2 font-semibold text-gray-700">
                                 Location
                              </p>
                              <input
                                 type="text"
                                 name=""
                                 className="w-full p-2 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                 id=""
                                 onChange={(e) => {
                                    setLocation(e.target.value);
                                 }}
                              >
                                 {/* <option value="0">Add service</option> */}
                              </input>
                           </div>
                           <div className="w-full sm:w-1/2">
                              <p className="mb-2 font-semibold text-gray-700">
                                 Salary
                              </p>
                              <input
                                 type="number"
                                 name=""
                                 placeholder="$"
                                 className="w-full p-2 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                 id=""
                                 onChange={(e) => {
                                    setSalary(e.target.value);
                                 }}
                              >
                                 {/* <option value="0">Add service</option> */}
                              </input>
                           </div>
                        </div>
                        <p className="mb-2 font-semibold text-gray-700">
                           Job Description
                        </p>
                        <textarea
                           type="text"
                           name=""
                           placeholder="Type..."
                           className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
                           id=""
                           onChange={(e) => {
                              setDescription(e.target.value);
                           }}
                        ></textarea>
                        <hr />

                        <div className="flex items-center mt-5 mb-3 space-x-4">
                           <input
                              className="inline-flex rounded-full"
                              type="checkbox"
                              id="check1"
                              name="check1"
                           />
                           <label
                              className="inline-flex font-semibold text-gray-400"
                              for="check1"
                           >
                              Add a crew
                           </label>
                           <br />
                           <input
                              className="inline-flex"
                              type="checkbox"
                              id="check2"
                              name="check2"
                              //    checked
                           />
                           <label
                              className="inline-flex"
                              //    font-semibold text-blue-500
                              for="check2"
                              //    checked
                           >
                              Add a specific agent
                           </label>
                           <br />
                        </div>
                        <label className="flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm">
                           <div className="flex flex-row items-center">
                              <div className="flex flex-col">
                                 <p className="font-semibold text-gray-800">
                                    {}
                                 </p>
                                 <p className="text-gray-400">{}</p>
                              </div>
                           </div>

                           <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                              Upload Image
                           </div>
                           {logo && logo.url ? (
                              <Avatar
                                 size={40}
                                 src={logo.url}
                                 className="mt-1"
                              />
                           ) : uploading ? (
                              <LoadingOutlined className="mt-2" />
                           ) : (
                              //    <CameraOutlined classNameName="mt-2" />
                              <img
                                 className="w-10 h-10 mr-3 rounded-full"
                                 src="https://cdn.onlinewebfonts.com/svg/img_98756.png"
                                 alt=""
                              />
                           )}
                           <input
                              className="text-sm cursor-pointer w-36 hidden"
                              type="file"
                              multiple
                              onChange={handleImage}
                           />

                           {/* <input
                           type="file"
                           className="font-semibold text-green-400"
                        /> */}
                           {/* <h1 className="font-semibold text-green-400">
                           Upload image
                        </h1> */}
                        </label>
                     </div>
                     <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
                        <p className="font-semibold text-gray-600">Cancel</p>
                        <button className="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
                           {loading ? (
                              <SyncOutlined spin className="py-1" />
                           ) : (
                              "Post"
                           )}
                        </button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </UserRoute>
   );
};

export default PostJob;
