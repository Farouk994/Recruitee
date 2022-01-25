import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

const PostJob = () => {
   const [company, setCompany] = useState("");
   const [description, setDescription] = useState("");
   const [title, setTitle] = useState("");
   const [salary, setSalary] = useState("");
   const [location, setLocation] = useState("");
   const [urgency, setUrgency] = useState("");
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(description, title, salary, location, urgency);
      try {
         setLoading(true);
         const { data } = await axios.post(
            "http://localhost:4000/api/recruiter/post-job",
            {
               company,
               description,
               title,
               salary,
               location,
               urgency,
            }
         );
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
            setUrgency("");
            setLoading(false);
         }
      } catch (err) {
         toast.error(err.response.data);
         setLoading(false);
      }
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
               {/* <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">
                     ADD POST
                  </h1> */}
               <div class="space-y-4">
                  <div>
                     <label for="title" class="text-lx font-serif">
                        Company
                     </label>
                     <input
                        value={company}
                        onChange={(e) => {
                           setCompany(e.target.value);
                        }}
                        type="text"
                        placeholder="company"
                        id="title"
                        class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                     />
                  </div>
                  <div>
                     <label for="title" class="text-lx font-serif">
                        Title:
                     </label>
                     <input
                        value={title}
                        onChange={(e) => {
                           setTitle(e.target.value);
                        }}
                        type="text"
                        placeholder="title"
                        id="title"
                        class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                     />
                  </div>
                  <div>
                     <label
                        for="description"
                        class="block mb-2 text-lg font-serif"
                     >
                        Description:
                     </label>
                     <textarea
                        value={description}
                        onChange={(e) => {
                           setDescription(e.target.value);
                        }}
                        id="description"
                        cols="30"
                        rows="10"
                        placeholder="write here.."
                        class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
                     ></textarea>
                  </div>
                  <div>
                     <label for="name" class="text-lx font-serif">
                        Salary:
                     </label>
                     <input
                        value={salary}
                        onChange={(e) => {
                           setSalary(e.target.value);
                        }}
                        type="number"
                        placeholder="salary"
                        id="name"
                        class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                     />
                  </div>
                  <div>
                     <label for="email" class="text-lx font-serif">
                        Location:
                     </label>
                     <input
                        value={location}
                        onChange={(e) => {
                           setLocation(e.target.value);
                        }}
                        type="text"
                        placeholder="location"
                        id="email"
                        class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                     />
                  </div>
                  <div>
                     <label for="email" class="text-lx font-serif">
                        Urgency:
                     </label>
                     <input
                        value={urgency}
                        onChange={(e) => {
                           setUrgency(e.target.value);
                        }}
                        type="text"
                        placeholder="urgency"
                        id="email"
                        class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                     />
                  </div>
                  <button class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">
                     ADD POST
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default PostJob;
