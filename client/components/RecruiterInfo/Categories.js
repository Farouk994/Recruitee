import React from "react";

const Categories = () => {
   return (
      <div>
         <div class="px-8 mt-10">
            <h1 class="mb-4 text-xl font-bold text-gray-700">Categories</h1>
            <div class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
               <ul>
                  <li>
                     <a
                        href="#"
                        class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                     >
                        - AWS
                     </a>
                  </li>
                  <li class="mt-2">
                     <a
                        href="#"
                        class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                     >
                        - Laravel
                     </a>
                  </li>
                  <li class="mt-2">
                     <a
                        href="#"
                        class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                     >
                        - Vue
                     </a>
                  </li>
                  <li class="mt-2">
                     <a
                        href="#"
                        class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                     >
                        - Design
                     </a>
                  </li>
                  <li class="flex items-center mt-2">
                     <a
                        href="#"
                        class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                     >
                        - Django
                     </a>
                  </li>
                  <li class="flex items-center mt-2">
                     <a
                        href="#"
                        class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                     >
                        - PHP
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Categories;
