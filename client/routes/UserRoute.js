import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../context/AuthProvider";

const UserRoute = ({ children }) => {
   const [ok, setOk] = useState(false);
   const router = useRouter();
   const [state] = useContext(UserContext);

   useEffect(() => {
      if (state && state.token) getCurrentUser();
   }, [state && state.token]);

   const getCurrentUser = async () => {
      try {
         const { data } = await axios.get(
            "http://localhost:5000/api/user/auth",
            {
               headers: { x_auth_token: `${state.token}` },
            }
         );
         if (data.ok) setOk(true);
      } catch (err) {
         router.push("/login");
      }
   };

//    Only runs when nothing is in state
   process.browser &&
      state === null &&
      setTimeout(() => {
         getCurrentUser();
      }, 1000);
   return !ok ? (
      <SyncOutlined spin className="d-flex justify-content-center py-1" />
   ) : (
      <>{children}</>
   );
};

export default UserRoute;
