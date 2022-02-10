import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/AuthProvider";
import UserRoute from "../routes/UserRoute";
import { useRouter } from "next/router";
import { Modal } from "antd";
import Other_profiles_dashboard from "../components/Dashboard/OtherProfiles";
import About from "../components/Dashboard/About";
import PostJob from "../components/Dashboard/PostJob";
import axios from "axios";
import UserProfiles from "../components/Dashboard/UserProfiles";

export default function dashboard() {
   const [state] = useContext(UserContext);
   const [profiles, setProfiles] = useState([]);
   const [current, setCurrent] = useState("");
   const [okay, setOkay] = useState(false);
   const [isModalVisible, setIsModalVisible] = useState(false);
   // const getData = () => {
   //    window.localStorage.removeItem("auth");
   //    setState(null);
   // };

   useEffect(() => {
      state && state.token;
   }, [state && state.token]);

   // console.log(state.user.firstName);

   const showModal = () => {
      setIsModalVisible(true);
   };

   const handleOk = () => {
      setIsModalVisible(false);
   };

   const handleCancel = () => {
      setIsModalVisible(false);
   };

   // Display Other user Profiles
   // useEffect(() => {
   //    if (state && state.token) {
   //       async function getProfiles() {
   //          const { data } = await axios.get(
   //             "http://localhost:4000/api/user/profiles/all",
   //             {
   //                headers: {
   //                   x_auth_token: `${state.token}`,
   //                },
   //             }
   //          );
   //          setProfiles(data.slice(0, 6));
   //       }
   //       getProfiles();
   //    }
   // }, [state && state.token]);

   // Handle Post Job Submission

   const [content, setContent] = useState("");

   const router = useRouter();

   return (
      <UserRoute>
         <div>
            <UserProfiles state={state} showModal={showModal} />
            <Modal
               title={null}
               visible={isModalVisible}
               onOk={handleOk}
               onCancel={handleCancel}
               footer={null}
            >
               {/* <!-- component --> */}
               <PostJob state={state} />
            </Modal>
         </div>
      </UserRoute>
   );
}

// const dashboard = () => {
//    const [state, setState] = useContext(UserContext);
//    return (
//       <UserRoute>
//          <div>
//             <h1>Get state</h1>
//             {JSON.stringify(state.user.firstName)}
//          </div>
//       </UserRoute>
//    );
// };

// export default dashboard;
