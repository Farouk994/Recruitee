import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { UserContext } from "../context/index";

const Navbar = () => {
   const [current, setCurrent] = useState("");
   const [state, setState] = useContext(UserContext);

   useEffect(() => {
      process.browser && setCurrent(window.location.pathname);
   }, [process.browser && window.location.pathname]);

   const router = useRouter();

   const logout = () => {
      window.localStorage.removeItem("auth");
      setState(null);
      router.push("/login");
   };
   return (
      <div>
         <div className="dark:bg-gray-800 bg-white relative">
            <header className="h-24 sm:h-32 flex items-center z-30 w-full">
               <div className="container mx-auto px-6 flex items-center justify-between">
                  <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                     RECRUIT.<span className="text-pink-500">EE</span>
                  </div>
                  <div className="flex items-center">
                     {/* nav */}
                     <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                        {state !== null ? (
                           <>
                              <Link href="/">
                                 <a className="py-2 px-6 flex">Home</a>
                              </Link>
                              <Link href="/jobs">
                                 <a className="py-2 px-6 flex">JOBS</a>
                              </Link>
                              <Link href="/user/dashboard">
                                 <a className="py-2 px-6 flex">Dashboard</a>
                              </Link>
                              {/* <Link href="/sign-in">
                                 <a className="py-2 px-6 flex">Create</a>
                              </Link> */}

                              <a className="py-2 px-6 flex" onClick={logout}>
                                 Log Out
                              </a>
                           </>
                        ) : (
                           <>
                              <Link href="/">
                                 <a className="py-2 px-6 flex">Home</a>
                              </Link>
                              <Link href="/login">
                                 <a className="py-2 px-6 flex">Log In</a>
                              </Link>
                              <Link href="/create-profile/">
                                 <a className="py-2 px-6 flex">
                                    Register Today
                                 </a>
                              </Link>
                              <Link href="/register">
                                 <a className="py-2 px-6 flex">
                                    Register Profile
                                 </a>
                              </Link>
                              <Link href="/sign-in">
                                 <a className="py-2 px-6 flex">Sign In</a>
                              </Link>
                           </>
                        )}
                     </nav>
                     <button className="lg:hidden flex flex-col ml-4">
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                     </button>
                  </div>
               </div>
            </header>
         </div>
      </div>
   );
};

export default Navbar;
