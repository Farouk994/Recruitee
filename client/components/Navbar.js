import React from "react";
import Link from "next/link";

const Navbar = () => {
   return (
      <div>
         <div className="dark:bg-gray-800 bg-white relative">
            <header className="h-24 sm:h-32 flex items-center z-30 w-full">
               <div className="container mx-auto px-6 flex items-center justify-between">
                  <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                     RECRUIT.<span className="text-pink-500">EE</span>
                  </div>
                  <div className="flex items-center">
                     <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                        <Link href="/">
                           <a className="py-2 px-6 flex">Home</a>
                        </Link>
                        <Link href="jobs">
                           <a className="py-2 px-6 flex">FIND JOBS</a>
                        </Link>
                        {/* <a href="#" className="py-2 px-6 flex">
                           Recruiters
                        </a> */}
                        <Link href="/login">
                           <a className="py-2 px-6 flex">Log In</a>
                        </Link>
                        <Link href="/register">
                           <a className="py-2 px-6 flex">Sign In</a>
                        </Link>
                        <Link href="/createProfile">
                           <a className="py-2 px-6 flex">Build Profile</a>
                        </Link>
                        <Link href="/dashboard">
                           <a className="py-2 px-6 flex">Dashboard</a>
                        </Link>
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
