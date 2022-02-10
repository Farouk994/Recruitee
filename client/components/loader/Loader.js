import React from "react";

const Loader = () => {
   return (
      <div>
         {/* <!-- component --> */}
         <link
            rel="stylesheet"
            href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css"
            integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM="
            crossorigin="anonymous"
         />

         <div class="w-full h-screen fixed block bg-gradient-to-br from-blue-600 to-indigo-600 z-50">
            <span
               class="text-pink-500 top-1/2 my-0 mx-auto block relative w-0 h-0"
               style={{
                  top: "50%",
               }}
            >
               <i class="fas fa-circle-notch fa-spin fa-5x"></i>
            </span>
         </div>
      </div>
   );
};

export default Loader;
