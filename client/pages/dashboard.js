import React, { useContext } from "react";
import { UserContext } from "../context/AuthProvider";
import UserRoute from "../routes/UserRoute";

const dashboard = () => {
   const [state, setState] = useContext(UserContext);
   return (
      <UserRoute>
         <div>
            <h1>Get state</h1>
            {JSON.stringify(state)}
         </div>
      </UserRoute>
   );
};

export default dashboard;
