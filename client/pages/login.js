import axios from "axios";
import React, { useState, useContext, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { UserContext } from "../context/AuthProvider";

const login = () => {
   const [state, setState] = useContext(UserContext);

   const [email, setEmail] = useState("max@gmail.com");
   const [password, setPassword] = useState("111111");
   // const [errMsg, setErrMsg] = useState("");

   const [loading, setLoading] = useState(false);

   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         setLoading(true);
         const { data } = await axios.post(
            "http://localhost:5000/api/login/account",
            {
               email,
               password,
            }
         );
         setEmail("");
         setPassword("");

         //  update context
         setState({
            user: data.user,
            token: data.token,
         });
         //  saving in local storage
         window.localStorage.setItem("auth", JSON.stringify(data));

         // Save now in local storage, takes in key and value
         //   window.localStorage.setItem("auth", JSON.stringify(data));

         //  if (auth && auth.token)
        //  router.push("/");
      } catch (err) {
         toast.error(err.response.data);
         setLoading(false);
      }
   };

   if (state && state.token) router.push("/");

   // useEffect(() => {
   //    userRef.current.focus();
   // }, []);

   // useEffect(() => {
   //    setErrMsg("");
   // }, [email, password]);

   // if (state && state.token) router.push("/");
   return (
      <div>
         {/* <!-- component --> */}
         <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
            <form onSubmit={handleSubmit}>
               <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                  <div className="space-y-4">
                     <h1 className="text-center text-2xl font-semibold text-gray-600">
                        Register
                     </h1>
                     {/* <div>
                         <label
                            for="username"
                            className="block mb-1 text-gray-600 font-semibold"
                         >
                            Username
                         </label>
                         <input
                            type="text"
                            className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                            value={name}
                            onChange={(e) => {
                               setEmail(e.target.value);
                            }}
                         />
                      </div> */}
                     <div>
                        <label
                           htmlFor="email"
                           className="block mb-1 text-gray-600 font-semibold"
                        >
                           Email
                        </label>
                        <input
                           type="text"
                           className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                           value={email}
                           onChange={(e) => {
                              setEmail(e.target.value);
                           }}
                        />
                     </div>
                     <div>
                        <label
                           htmlFor="password"
                           className="block mb-1 text-gray-600 font-semibold"
                        >
                           Password
                        </label>
                        <input
                           type="password"
                           className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                           value={password}
                           onChange={(e) => {
                              setPassword(e.target.value);
                           }}
                        />
                     </div>
                  </div>
                  <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
                     {loading ? (
                        <SyncOutlined spin className="py-1" />
                     ) : (
                        "Register"
                     )}
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default login;
