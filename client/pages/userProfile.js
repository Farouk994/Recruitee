import axios from "axios";
import { useRouter } from "next/router";
import { useParams} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import UserProfiles from "../components/Dashboard/UserProfiles";
import { UserContext } from "../context/AuthProvider";
// import user from "../../server/models/User";

const userProfile = () => {
   const { id } = useRouter()
   const [profile, setProfile] = useState("");
   const [state] = useContext(UserContext);

   useEffect(() => {
      async function fetchData() {
         const data = await axios
            .get(`http://localhost:5000/api/user/${id}`, {
               headers: {
                  x_auth_token: `${state?.token}`,
               },
            })
            .then((res) => {
               setProfile(res.data);
               console.log("User ID", res.data);
            })
            .catch((err) => {
               toast.error(err.response.data);
            });
      }
      fetchData();
   }, []);

   return (
      <div>
         <UserProfiles
            state={state}
            profile={profile}
            id={id}
            page="userProfile"
         />
      </div>
   );
};

export default userProfile;
